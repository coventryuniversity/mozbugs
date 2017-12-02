import * as React from 'react'
import PropTypes from 'prop-types'
import { FilterGroups } from '../constants'
import { Menu } from 'antd';
import { Checkbox } from 'antd';

import store from '../services/store'

export class FilterContainer extends React.Component<any, any> {
  constructor(props) {
    super(props)
    this.state = {
      checkedOptions: []
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(event) {
    let checkedOptions = this.state.checkedOptions
    const { value, checked } = event.target
    if (checked) {
      checkedOptions = checkedOptions.concat([value])
    } else {
      checkedOptions = checkedOptions.filter(oldValue => oldValue !== value)
    }
    this.setState({
      checkedOptions: checkedOptions
    }, () => this.props.onChange(this.state.checkedOptions))
  }

  render() {
    return (
      <Menu mode='inline'>
        {FilterGroups.map((group, index) => (
          <Menu.SubMenu key={index} title={group.label}>
            {group.options.map(option =>
              <Menu.Item key={`menu-item-${option.key}`}>
                <Checkbox value={option.key} onChange={this.onChange}>
                  {option.label}
                </Checkbox>
              </Menu.Item>
            )}
          </Menu.SubMenu>
        ))}
      </Menu>
    )
  }
}