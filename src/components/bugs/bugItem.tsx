import * as React from 'react';
import PropTypes from 'prop-types';
import * as capitalize from 'lodash/capitalize';
import { Card, Tag } from 'antd';



export class Bug extends React.Component<any, any> {

  onClick(event) {
    event.preventDefault();
  }

  buildBugzillaLink(bug) {
    return `https://bugzilla.mozilla.org/show_bug.cgi?id=${bug.id}`;
  }

  render() {
    const { bug } = this.props
    // const pin = <Button type="ghost" icon="pushpin-o" onClick={this.onClick.bind(this)} />
    const statusColor = bug.status === 'NEW' ? '#8BC34A'
      : bug.status === 'ASSIGNED' ? '#C13832'
        : bug.status === 'REOPENED' ? '#FF9800'
          : bug.status === 'UNCONFIRMED' ? '#03A9F4' : undefined

    return (
      <a className='bug' href={this.buildBugzillaLink(bug)} target='_blank' rel='noopener noreferrer'>
        <Card title={capitalize(bug.summary)} /* extra={pin} */>
          <Tag color={statusColor}>
            {capitalize(bug.status)}
          </Tag>
        </Card>
      </a>
    )
  }
}
// Bug.propTypes = {
//   bug: PropTypes.object.isRequired
// }

// export default Bug
