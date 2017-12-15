import * as React from 'react';
import PropTypes from 'prop-types';
import * as store from 'store';

import { Collapse } from 'antd';
const Panel = Collapse.Panel;

import ReactScrollableList from 'react-scrollable-list';

import { BugComponent } from './bug.component';

import { Bug } from './bug.component';

type BugListProps = {
  bugs: Array<Bug>
  pinnedBugs: Array<Bug>
  /**
   * function passed through for handeling pin logic
   */
  handlePins: Function
};

export class BugListComponent extends React.Component<BugListProps, any> {

  componentWillMount() {
    this.setState({ pinned: store.get('pinned') });
  }

  isPinned(id): boolean {
    return this.props.pinnedBugs.findIndex(bug => bug.id === id) > -1;
  }

  render() {
    return (
      <div className='bug-container'>
        {this.props.bugs.map(bug =>
          <BugComponent bug={bug} pinned={this.isPinned(bug.id)} handlePins={this.props.handlePins} key={bug.id} />
        )}
      </div>
    );
  }
}