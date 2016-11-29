import React, { Component } from 'react';
import BugService from '../services/BugService';

class Bug extends Component {
  render() {
    const bug = this.props.bug
    return (
      <a className='bug' href={BugService.buildLinkFromId(bug.id)} target="_blank" >
        <span className="bug-status">{bug.status}</span>
        <span className="bug-summary">{bug.summary}</span>
      </a>
    );
  }
}

export default Bug;
