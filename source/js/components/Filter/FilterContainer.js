import React, { Component } from 'react';
import FilterService from '../../services/FilterService';
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
    }, () => this.triggerChanges())

  }

  triggerChanges() {
    let filterQuery = 'empty';

    if (this.state.checkedOptions.length > 0) {
      filterQuery = FilterService.buildQueryString(
        this.state.checkedOptions
        .map(key => FilterService.options[key].values)
        .reduce((flat, value) => flat.concat(value), [])
      )
    }

    this.props.onChange(filterQuery)
  }

  render() {
    return (
      <div className="filter-container">
        {FilterService.groups.map((group, index) => (
          <div className="filter-group" key={`filter-group-${index}`}>
            <label className="filter-group-label">{group.label}</label>
            {group.options.map(key => <FilterOption
              key={`filter-option-${key}`}
              label={FilterService.options[key].label}
              onChange={this.onChange.bind(this, key)}
            />)}
          </div>
        ))}
      </div>
    );
  }
}

export default FilterContainer;
