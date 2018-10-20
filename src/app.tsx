import * as React from 'react';
import { FilterComponent } from './components/filter.component';
import { BugListComponent } from './components/bugs/bugList.component';
import { PinnedComponent } from './components/bugs/pinned.component';
import { Bug } from './components/bugs/bug.component';
import { store } from './services/store';
import * as lstore from 'store';
import { FilterOptions } from './constants';
import { Button } from 'antd';

import 'antd/dist/antd.css';
import './css/index.scss';

type AppProps = {
  sidebarOpen: true
};
type AppState = {
  sidebarOpen: true
  bugs: Array<Bug>
};

export class App extends React.Component<any, any> {
  state: any;

  constructor(props, state) {
    super(props);

    this.state = {
      sidebarOpen: false,
      sidebarDocked: false,
      filterOptions: [],
      isLoading: false,
      bugs: [],
      pinnedBugs: lstore.get('pinned') || []
    };

    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.onFilterChange = this.onFilterChange.bind(this);
  }

  componentWillMount() {

    let mql = window.matchMedia(`(min-width: 800px)`);
    mql.addListener(this.mediaQueryChanged.bind(this));
    this.setState({ mql: mql, sidebarDocked: mql.matches });
  }

  componentDidMount() {
    // NOTE: This will trigger all Bugs to be loaded let's test this
    store.loadBugs(Object.keys(FilterOptions));
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  mediaQueryChanged() {
    this.setState({
      sidebarDocked: this.state.mql.matches
    });
  }

  toggleSidebar() {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen
    });
  }

  onFilterChange(filterOptions) {
    this.setState({
      filterOptions: filterOptions,
      isLoading: true
    }, () =>
        store.loadBugs(filterOptions)
          .then(bugs => {
            if (filterOptions.every(option => this.state.filterOptions.includes(option))) {
              this.setState({
                isLoading: false,
                bugs: bugs
              });
            }
            return bugs;
          }));
  }

  pinSwitch(bug: Bug) {
    let pinned: Array<Bug> = lstore.get('pinned');
    if (!pinned) { pinned = []; } // incase no pinned bugs stored locally yet

    bug.pinned = !bug.pinned;

    if (bug.pinned) { // if now pinned
      pinned.push(bug); // add bug

      this.setState({
        pinnedBugs: pinned
      });

    } else {
      pinned = pinned.filter((buga) => { return buga.id !== bug.id; }); // remove bug

      // get current list of bugs
      let bugs = this.state.bugs;

      // if bug is in the current search list, we need to mark it as not pinned
      if (bugs[bugs.findIndex(buga => { return buga.id === bug.id; })] > -1) {
        bugs[bugs.findIndex(buga => { return buga.id === bug.id; })].pinned = false;
      }

      // update bugs and pinned bugs
      this.setState({
        pinnedBugs: pinned,
        bugs: bugs
      });
    }

    // updated local storage
    lstore.set('pinned', pinned); // set store
  }

  render() {
    const appbarIcon = this.state.isLoading ? 'fa-spinner fa-pulse' : 'fa-bug';
    const sidebarClass = this.state.sidebarDocked ? 'sidebar-docked'
      : this.state.sidebarOpen ? 'sidebar-open' : 'sidebar-closed';

    return (
      <div className={sidebarClass}>
        <div className='appbar'>
          <Button className='sidebar-toggle' type='ghost' icon={this.state.sidebarOpen ? 'menu-fold' : 'menu-unfold'} onClick={this.toggleSidebar} />
          <i className={`appbar-icon fa fa-fw ${appbarIcon}`} />
          <span className='appbar-title'>Moz Bugs</span>
        </div>
        <div className='sidebar'>
          <FilterComponent onChange={this.onFilterChange} />
        </div>
        <div className='content'>
          <PinnedComponent bugs={this.state.pinnedBugs} handlePins={this.pinSwitch.bind(this)} />
          {
            this.state.filterOptions.length === 0 ? <div className='response'>No options selected</div>
              : this.state.isLoading ? <div className='response'>Loading...</div>
                : this.state.bugs.length === 0 && !this.state.isLoading ? <div className='response'>No matching bugs</div>
                  : <BugListComponent bugs={this.state.bugs} pinnedBugs={this.state.pinnedBugs} handlePins={this.pinSwitch.bind(this)} />
          }
        </div>
      </div>
    );
  }
}
