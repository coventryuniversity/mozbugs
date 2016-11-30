import React, { Component } from 'react';

class FilterOption extends Component {
  constructor() {
    super()
    this.state = {
      checked: false
    }
  }

  onChange() {
    this.setState({
      checked: !this.state.checked
    }, () => this.props.onChange(this.state.checked))
  }

  render() {
    return (
      <div className="filter-checkbox">
        <label>
          <input type="checkbox" onChange={this.onChange.bind(this)}/>
          {this.props.label}
        </label>
      </div>
    );
  }
}

export default FilterOption;
