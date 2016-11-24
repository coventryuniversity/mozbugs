import React, { Component } from 'react';
import getBugs from '../services/BugService';
import Bug from './Bug';

class BugList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bugs: []
    };
  }

  componentDidMount() {
    this.getBugs = getBugs('Firefox').then(bugs => {
      this.setState({
        bugs: bugs
      });
    });
  }

  componentWillUnmount() {
    this.getBugs.abort();
  }

  render() {
    const bugs = this.state.bugs
    return (
      <div className="bug-list">
        {bugs.length > 0 ? bugs.map(bug => <Bug bug={bug} key={bug.id}/>) : <i className="fa fa-spinner fa-pulse fa-3x fa-fw"/>}
      </div>
    );
  }
}

export default BugList;
