import React, { Component } from 'react'
import PropTypes from 'prop-types'
import capitalize from 'lodash/capitalize'
import { buildBugzillaLink } from '../../Utils'
import Card from 'antd/lib/card'
import Tag from 'antd/lib/tag'
// import Button from 'antd/lib/button';
import 'antd/lib/card/style/css'
import 'antd/lib/tag/style/css'
// import 'antd/lib/button/style/css';

class Bug extends Component {
  onClick (event) {
    event.preventDefault()
  }

  render () {
    const { bug } = this.props
    // const pin = <Button type="ghost" icon="pushpin-o" onClick={this.onClick.bind(this)} />
    const statusColor = bug.status === 'NEW' ? '#8BC34A'
      : bug.status === 'ASSIGNED' ? '#C13832'
      : bug.status === 'REOPENED' ? '#FF9800'
      : bug.status === 'UNCONFIRMED' ? '#03A9F4' : undefined

    return (
      <a className='bug' href={buildBugzillaLink(bug)} target='_blank' rel='noopener noreferrer'>
        <Card title={capitalize(bug.summary)} /* extra={pin} */>
          <Tag color={statusColor}>
            {capitalize(bug.status)}
          </Tag>
        </Card>
      </a>
    )
  }
}
Bug.propTypes = {
  bug: PropTypes.object.isRequired
}

export default Bug
