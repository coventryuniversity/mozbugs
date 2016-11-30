import React, { Component } from 'react';
import { buildBugzillaLink } from '../../Utils';

class Bug extends Component {
  render() {
    const bug = this.props.bug
    return (
      <a className='bug' href={buildBugzillaLink(bug)} target="_blank" >
        <span className="bug-status">{bug.status}</span>
        <span className="bug-summary">{bug.summary}</span>
      </a>
    );
  }
}

export default Bug;
