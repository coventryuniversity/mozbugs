import react, { Component } from 'react';
import Filter from './js/components/Filter'
import BugContainer from './js/components/Bugs/BugContainer'
import store from './js/Store';
import { FilterOptions } from './js/constants'
import Button from 'antd/lib/button'
import 'antd/lib/button/style/css'


export class App extends Component {
  constructor() {

    //@ts-ignore
    super()

    this.state = {
      sidebarOpen: false,
      sidebarDocked: false,
      filterOptions: [],
      isLoading: false,
      bugs: []
    }

    this.toggleSidebar = this.toggleSidebar.bind(this)
    this.onFilterChange = this.onFilterChange.bind(this)
  }

  componentWillMount() {
    var mql = window.matchMedia(`(min-width: 800px)`)
    mql.addListener(this.mediaQueryChanged.bind(this))
    this.setState({ mql: mql, sidebarDocked: mql.matches })
  }

  componentDidMount() {
    // NOTE: This will trigger all Bugs to be loaded let's test this
    store.loadBugs(Object.keys(FilterOptions))
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged)
  }

  mediaQueryChanged() {
    this.setState({
      sidebarDocked: this.state.mql.matches
    })
  }

  toggleSidebar() {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen
    })
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
              })
            }
            return bugs
          }))
  }

  render() {
    const appbarIcon = this.state.isLoading ? 'fa-spinner fa-pulse' : 'fa-bug'
    const sidebarClass = this.state.sidebarDocked ? 'sidebar-docked'
      : this.state.sidebarOpen ? 'sidebar-open' : 'sidebar-closed'
      
    return (
      <div className={sidebarClass}>
        <div className='appbar'>
          <Button className='sidebar-toggle' type='ghost' icon={this.state.sidebarOpen ? 'menu-fold' : 'menu-unfold'} onClick={this.toggleSidebar} />
          <i className={`appbar-icon fa fa-fw ${appbarIcon}`} />
          <span className='appbar-title'>Moz Bugs</span>
        </div>
        <div className='sidebar'>
          <Filter onChange={this.onFilterChange} />
        </div>
        <div className='content'>
          {
            this.state.filterOptions.length === 0 ? <div className='response'>No options selected</div>
              : this.state.isLoading ? <div className='response'>Loading...</div>
                : this.state.bugs.length === 0 && !this.state.isLoading ? <div className='response'>No matching bugs</div>
                  : <BugContainer bugs={this.state.bugs} />
          }
        </div>
      </div>
    )
  }
}
export default App
