import React, { Component } from 'react';
import Filter from './Filter';
import BugContainer from './Bugs/BugContainer';
import Store from '../Store';
import { FilterOptions } from '../Constants';
import Spin from 'antd/lib/spin';
import 'antd/lib/spin/style/css';

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
    return (
      <div className="app">
        <div className="app-title">
          <i className={`app-title-icon fa fa-bug fa-fw`}/>
          <span className="app-title-text">Moz Bugs!</span>
        </div>
        <div className="app-container">
          <Filter onChange={this.onFilterChange.bind(this)}/>
          {
            this.state.filterOptions.length === 0 ? <div className="response">No options selected</div> :
            this.state.isLoading ? <div className="response"><Spin size="large" /></div> :
            this.state.bugs.length === 0 ? <div className="response">No matching bugs</div> :
            <BugContainer bugs={this.state.bugs}/>
          }
        </div>
      </div>
    );
  }
}
export default App;
