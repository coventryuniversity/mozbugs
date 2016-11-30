import React, { Component } from 'react';
import FilterContainer from './Filter/FilterContainer';
import BugContainer from './Bugs/BugContainer';
import Store from '../Store';
import { FilterOptions } from '../Constants';

class App extends Component {
  constructor() {
    super()
    this.state = {
      filterOptions: [],
      isLoading: false,
      bugs: []
    }
  }

  componentDidMount() {
    // NOTE: This will trigger all Bugs to be loaded let's test this
    Store.loadBugsByFilterOptions(Object.keys(FilterOptions))
  }

  onFilterChange(filterOptions) {
    this.setState({
      filterOptions: filterOptions,
      isLoading: true
    }, () =>
    Store.loadBugsByFilterOptions(filterOptions)
    .then(bugs => {
      if (filterOptions.every(option => this.state.filterOptions.includes(option))) {
        this.setState({
          isLoading: false,
          bugs: bugs
        })
      }
      return bugs
    }))
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
          <FilterContainer onChange={this.onFilterChange.bind(this)}/>
          <BugContainer bugs={this.state.bugs}/>
        </div>
      </div>
    );
  }
}
export default App;
