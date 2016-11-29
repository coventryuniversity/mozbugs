import React, { Component } from 'react';
import BugList from './BugList';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1 className="app-title"><i className="fa fa-bug fa-fw app-icon"/> Moz Bugs!</h1>
        <BugList />
      </div>
    );
  }
}

export default App;
