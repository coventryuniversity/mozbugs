import * as React from 'react'
import PropTypes from 'prop-types'
import { Bug } from './BugItem'

export class BugContainer extends React.Component<any, any> { 
  render() {
    return (
      <div className='bug-container'>
        {this.props.bugs.map(bug => <Bug bug={bug} key={bug.id} />)}
      </div>
    )
  }
}

// export default BugContainer
