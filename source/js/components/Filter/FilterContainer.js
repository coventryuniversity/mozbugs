import React, { Component } from 'react';
import { FilterGroups } from '../../Constants';
import FilterOption from './FilterOption';

class FilterContainer extends Component {
  constructor() {
    super()
    this.state = {
      checkedOptions: []
    }
  }

  onChange(key, checked) {
    let checkedOptions = this.state.checkedOptions;
    if (checked) {
      checkedOptions = checkedOptions.concat([key]);
    } else {
      checkedOptions = checkedOptions.filter(oldKey => oldKey !== key);
    }
    this.setState({
      checkedOptions: checkedOptions
    }, () => this.props.onChange(this.state.checkedOptions))

  }

  render() {
    return (
      <div className="filter-container">
        {FilterGroups.map((group, index) => (
          <div className="filter-group" key={`filter-group-${index}`}>
            <label className="filter-group-label">{group.label}</label>
            {group.options.map(option => <FilterOption
              key={`filter-option-${option.key}`}
              label={option.label}
              onChange={this.onChange.bind(this, option.key)}
            />)}
          </div>
        ))}
      </div>
    );
  }
}

export default FilterContainer;
