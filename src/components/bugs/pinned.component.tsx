import * as React from 'react'
import PropTypes from 'prop-types'
import { BugComponent, Bug } from './bug.component';

import { Collapse } from 'antd';
const Panel = Collapse.Panel;

import * as store from 'store';

export class PinnedComponent extends React.Component<any, any> {

    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className='bug-container'>
                {this.props.bugs.map(bug => <BugComponent bug={bug} handlePins={this.props.handlePins} pinned={true} key={bug.id} />)}
            </div>
        )
    }
}