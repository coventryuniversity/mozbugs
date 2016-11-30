import React, { Component } from 'react';
import BugItem from './BugItem';

class BugContainer extends Component {

  render() {
    return (
      <div className="bug-container">
        {this.props.bugs.map(bug => <BugItem bug={bug} key={bug.id}/>)}
      </div>
    );
  }
}

export default BugContainer;
