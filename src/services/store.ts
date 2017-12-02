import { intersectionBy } from 'lodash';

import bz from 'bzrest';

import { FilterOptions, requestDefaults } from '../constants';
import { log } from 'util';

/** Bug store */
class Store {
  bugs: any;

  constructor() {
    this.bugs = {}
  }

  async loadBugs(filterOptions) {
    let bugs = await Promise.all(filterOptions.map(async key => {
      // if bugs are already retrieved
      if (this.bugs[key]) { return this.bugs[key] }
      // else, get the bugs
      this.bugs[key] = await this.getbugs(FilterOptions[key])
      return this.bugs[key]
    }))

    return intersectionBy(...bugs, 'id');
  }

  /**
   * @param filterOption single option from FilterOptions list.
   */
  async getbugs(filterOption) {
    let bugs: Array<any> = await Promise.all(filterOption.map(query => this.request(query))) // do multiple request from filter option
    return [].concat(...bugs);
  }

  request(filterQuery) {
    let q = Object.assign(filterQuery, requestDefaults)
    return bz.bugs.search(q)
  }
}

export const store = new Store()

