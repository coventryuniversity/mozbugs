import intersectionBy from 'lodash/intersectionBy'
import { FilterOptions } from './Constants';
import { RequestsBugs } from './Utils'

const _BugsByFilterOption = {}

export default {
  loadBugsByFilterOptions: filterOptions =>
    Promise.all(filterOptions.map(key => {
      if (_BugsByFilterOption.hasOwnProperty(key)) {
        return _BugsByFilterOption[key]
      }
      return _BugsByFilterOption[key] = Promise.all(FilterOptions[key].map(query =>
        RequestsBugs(query))
      ).then(bugsPerRequest => bugsPerRequest.reduce((flat, bugs) => flat.concat(bugs), []))
    })
  ).then(bugsPerOption => intersectionBy(...bugsPerOption, 'id'))
};
