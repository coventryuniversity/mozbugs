import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FilterGroups } from '../Constants'
import Menu from 'antd/lib/menu'
import Checkbox from 'antd/lib/checkbox'
import 'antd/lib/menu/style/css'
import 'antd/lib/checkbox/style/css'

class FilterContainer extends Component {
  constructor () {
    super()
    this.state = {
      checkedOptions: []
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange (event) {
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

  render () {
    return (
      <Menu
        mode='inline'
      >
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
FilterContainer.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default FilterContainer
