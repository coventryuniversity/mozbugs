import * as React from 'react';
import PropTypes from 'prop-types';
import * as capitalize from 'lodash/capitalize';
import { Button, Card, Tag } from 'antd';

import * as css from 'classnames';

export interface Bug {
  id: number;
  assigned_to: string;
  summary: string;
  last_change_time: string;
  component: string;
  whiteboard: string;
  status: string;
  severity: string;
  pinned?: boolean;
}

type BugProps = {
  bug: Bug
  pinned?: boolean
  handlePins: Function
};


export class BugComponent extends React.Component<BugProps, any> {

  constructor(props) {
    super(props);
    this.props.bug.pinned = this.props.pinned;
  }

  async pinSwitch(event) {
    event.preventDefault(); // stop <a> tag from activating on button click
    this.props.handlePins(this.props.bug);
  }

  /**
   *
   * @param id - id number for a bugzilla bug
   */
  buildBugzillaLink(id: number) {
    return `https://bugzilla.mozilla.org/show_bug.cgi?id=${id}`;
  }

  render() {
    const { bug } = this.props;
    const pinClass = css({ 'pinned': this.props.pinned });

    const pin = <Button className={pinClass} type='ghost' icon='pushpin-o' onClick={this.pinSwitch.bind(this)} />;
    const statusColor = bug.status === 'NEW' ? '#8BC34A'
      : bug.status === 'ASSIGNED' ? '#C13832'
        : bug.status === 'REOPENED' ? '#FF9800'
          : bug.status === 'UNCONFIRMED' ? '#03A9F4' : undefined;

    return (
      <a className='bug' href={this.buildBugzillaLink(bug.id)} target='_blank' rel='noopener noreferrer' >
        <Card title={capitalize(bug.summary)} extra={pin} >
          <Tag color={statusColor}>
            {capitalize(bug.status)}
          </Tag>
        </Card>
      </a >
    );
  }
}
