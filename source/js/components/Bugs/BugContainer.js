import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BugItem from './BugItem'

class BugContainer extends Component {
  render () {
    return (
      <div className='bug-container'>
        {this.props.bugs.map(bug => <BugItem bug={bug} key={bug.id} />)}
      </div>
    )
  }
}
BugContainer.propTypes = {
  bugs: PropTypes.array.isRequired
}

export default BugContainer
