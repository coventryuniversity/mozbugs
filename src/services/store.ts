import { intersectionBy } from 'lodash';
import bz from 'bzrest';

import { FilterOptions, requestDefaults } from '../constants';

/** Bug store */
class Store {
  bugs: any;
  constructor() { this.bugs = {}; }

  async loadBugs(filterOptions) {
    let bugs = await Promise.all(filterOptions.map(async (key: string) => {
      // if bugs are already retrieved
      if (this.bugs[key]) return this.bugs[key];

      // else, get the bugs
      this.bugs[key] = [].concat(... await Promise.all(FilterOptions[key].map(query => this.request(query))))
      return this.bugs[key];
    }))

    return intersectionBy(...bugs, 'id');
  }

  private request(filterQuery) {
    // combine query filter with default filter values.
    let q = Object.assign(filterQuery, requestDefaults);
    return bz.bugs.search(q); // search for bugs
  }
}

export const store = new Store();

