import React, { Component } from 'react';
import { buildBugzillaLink } from '../../Utils';

class Bug extends Component {
  render() {
    const bug = this.props.bug
    const statusStyle = bug.status === 'NEW' ? {backgroundColor:'green'} : 
    					bug.status === 'ASSIGNED' ? {backgroundColor:'red'}:
    					bug.status === 'REOPENED' ? {backgroundColor:'orange'}:
    					bug.status === 'UNCONFIRMED' ? {backgroundColor:'black'}:{}
    return (
      <a className='bug' href={buildBugzillaLink(bug)} target="_blank" >
        <span className="bug-status" style={statusStyle}>{bug.status}</span>
        <span className="bug-summary">{bug.summary}</span>
      </a>
    );
  }
}

export default Bug;
