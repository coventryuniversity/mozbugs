import React, { Component } from 'react';
import BugService from '../services/BugService';

class Bug extends Component {
  render() {
    const bug = this.props.bug
    return (
      <div className='bug'>
        <a href={BugService.buildLinkFromId(bug.id)} target="_blank" >
          <span>{bug.status}</span>
          <span>{bug.summary}</span>
        </a>
      </div>
    );
  }
}

export default Bug;
