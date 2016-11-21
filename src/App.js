import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bugs: []
    };
  }

  componentDidMount() {
    this.requestBugs = axios.get('https://bugzilla.mozilla.org/rest/bug?product=Input&f1=bug_mentor&o1=isnotempty')
      .then(result => {
        const order = ['NEW', 'RESOLVED']
        const sortedBugs = result.data.bugs.sort(function(a, b) {
          return order.indexOf(a.status) - order.indexOf(b.status);
        })
        this.setState({
          bugs: sortedBugs
        });
      })
  }

  componentWillUnmount() {
    this.requestBugs.abort();
  }

  render() {
    return (
      <div>
        <h1>Bugs!</h1>
        {/* Don't have an ID to use for the key, URL work ok? */}
        {this.state.bugs.map(function(bug) {
          return (
            <div key={bug.id} className="bug">
              <a href={'https://bugzilla.mozilla.org/show_bug.cgi?id=' + bug.id} target="_blank">
                <span>{bug.status}</span>
                <span>{bug.summary}</span>
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
