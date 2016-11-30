import React, { Component } from 'react';
import FilterContainer from './Filter/FilterContainer';
import BugContainer from './Bugs/BugContainer';
import BugService from '../services/BugService';

class App extends Component {
  constructor() {
    super()
    this.currentFilterQuery = 'empty'
    this.bugsByFilter = {
      'empty' : []
    }
    this.state = {
      isLoading: false,
      bugs: []
    }
  }

  onChange(filterQuery) {
    this.setState({
      isLoading: true
    })

    this.currentFilterQuery = filterQuery

    if (this.bugsByFilter.hasOwnProperty(filterQuery)) {
      this.setState({
        isLoading: false,
        bugs: this.bugsByFilter[filterQuery]
      })
    } else {
      BugService.loadBugs(filterQuery)
      .then(bugs => {
        this.bugsByFilter[filterQuery] = bugs
        if (this.currentFilterQuery === filterQuery) {
          this.setState({
            isLoading: false,
            bugs: bugs
          })
        }
      })
    }
  }

  render() {
    const appIcon = this.state.isLoading ? 'fa fa-spinner fa-pulse fa-fw' : 'fa fa-bug fa-fw'
    return (
      <div className="app">
        <div className="app-title">
          <i className={`app-title-icon ${appIcon}`}/>
          <span className="app-title-text">Moz Bugs!</span>
        </div>
        <div className="app-container">
          <FilterContainer onChange={this.onChange.bind(this)}/>
          <BugContainer bugs={this.state.bugs}/>
        </div>
      </div>
    );
  }
}
export default App;
