import axios from 'axios';
import { flow, sortBy, map, assign } from 'lodash/fp';
import {stringify as stringifyParams} from 'qs';


const getBugs = (product) => axios.get('/bug', {
  baseURL: 'https://bugzilla.mozilla.org/rest',
  params: {
    f1: 'bug_mentor',
    o1: 'isnotempty',
    whiteboard_type: 'contains_all',
    bug_status: ['NEW', 'ASSIGNED', 'REOPENED', 'UNCONFIRMED'],
    include_fields: ['id', 'assigned_to', 'summary', 'last_change_time', 'component', 'whiteboard', 'status', 'severity'],
    product: product
  },
  paramsSerializer: params => stringifyParams(params, {arrayFormat: 'repeat'})
})
.then(result => flow(
  sortBy(bug => new Date(bug.last_change_time).getTime() * -1),
  map(bug => assign(bug, {
    last_change_time: new Date(bug.last_change_time).toDateString(),
    link: `https://bugzilla.mozilla.org/show_bug.cgi?id=${bug.id}`
  }))
)(result.data.bugs))


export default getBugs;
