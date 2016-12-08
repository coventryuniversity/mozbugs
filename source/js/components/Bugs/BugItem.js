import React, { Component } from 'react';
import capitalize from 'lodash/capitalize';
import { buildBugzillaLink } from '../../Utils';
import Card from 'antd/lib/card';
import Tag from 'antd/lib/tag';
import Button from 'antd/lib/button';
import 'antd/lib/card/style/css';
import 'antd/lib/tag/style/css';
import 'antd/lib/button/style/css';

class Bug extends Component {
  constructor() {
    super()
    this.state = {
      pinned: false
    }
  }

  onClick(event) {
    event.preventDefault()
    this.setState({
      pinned: !this.state.pinned
    })
  }

  render() {
    const bug = this.props.bug
    const pin = <Button type={this.state.pinned ? 'primary' : 'ghost'} icon="pushpin" onClick={this.onClick.bind(this)} />
    const statusColor = bug.status === 'NEW' ? '#8BC34A' :
      bug.status === 'ASSIGNED' ? '#C13832' :
      bug.status === 'REOPENED' ? '#FF9800' :
      bug.status === 'UNCONFIRMED' ? '#03A9F4' : undefined

    return (
      <a className='bug' href={buildBugzillaLink(bug)} target="_blank" >
        <Card title={capitalize(bug.summary)} extra={pin}>
          <Tag color={statusColor}>
            {capitalize(bug.status)}
          </Tag>
        </Card>
      </a>
    );
  }
}

export default Bug;
