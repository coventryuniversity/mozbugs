import React, { Component } from 'react';
import BugService from '../services/BugService';
import Bug from './Bug';

class BugList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bugs: []
    };
  }

  componentDidMount() {
    BugService.makeRequest({ product: 'Firefox' })
    .then(bugs => {
      this.setState({
        bugs: bugs
      });
    });
  }

  render() {
    const bugs = this.state.bugs
    return (
      <div className="bug-list">
        {bugs.length > 0 ? bugs.map(bug => <Bug bug={bug} key={bug.id}/>) : <i className="fa fa-spinner fa-pulse fa-3x fa-fw bug-list-spinner"/>}
      </div>
    );
  }
}

export default BugList;
