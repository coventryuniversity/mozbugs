import React, { Component } from 'react';

class Bug extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const bug = this.props.bug
    return (
      <div className='bug'>
        <a href={bug.link} target="_blank" >
          <span>{bug.status}</span>
          <span>{bug.summary}</span>
        </a>
      </div>
    );
  }
}

export default Bug;
