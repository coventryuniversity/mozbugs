import React, { Component } from 'react';
import Filter from './Filter';
import BugContainer from './Bugs/BugContainer';
import Store from '../Store';
import { FilterOptions } from '../Constants';
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

  sideMenu() {
    var e = document.getElementById('sidebar');
    e.style.width = ((e.style.width!="100%") ? "100%" : "0px");
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
    const appbarIcon = this.state.isLoading ? 'fa-spinner fa-pulse' : 'fa-bug'
    return (
      <div>
        <div className="appbar">
        <span id="menu" onClick={this.sideMenu}>&#9776;</span>

          <i className={`appbar-icon fa fa-fw ${appbarIcon}`}/>
          <span className="appbar-title">Moz Bugs</span>
        </div>
        <div id="sidebar" className="sidebar">
          <Filter onChange={this.onFilterChange.bind(this)}/>
        </div>
        <div className="content">
            {
              this.state.filterOptions.length === 0 ? <div className="response">No options selected</div> :
              this.state.isLoading ? <div className="response">Loading...</div> :
              this.state.bugs.length === 0 && !this.state.isLoading ? <div className="response">No matching bugs</div> :
              <BugContainer bugs={this.state.bugs}/>
            }
        </div>
      </div>
    );
  }
}
export default App;
