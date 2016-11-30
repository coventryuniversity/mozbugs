import merge from 'lodash/merge'
import {stringify as stringifyQuery} from 'qs';

export const RequestsBugs = filterQuery => {
  const queryString = stringifyQuery(merge({
    f1: 'bug_mentor',
    o1: 'isnotempty',
    whiteboard_type: 'contains_all',
    bug_status: ['NEW', 'ASSIGNED', 'REOPENED', 'UNCONFIRMED'],
    include_fields: ['id', 'assigned_to', 'summary', 'last_change_time', 'component', 'whiteboard', 'status', 'severity']
  }, filterQuery), {arrayFormat: 'repeat'})
  return fetch(`https://bugzilla.mozilla.org/rest/bug?${queryString}`)
  .then(response => {
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  })
  .then(response => response.json())
  .then(data => data.bugs)
}

export function buildBugzillaLink(bug) {
  return `https://bugzilla.mozilla.org/show_bug.cgi?id=${bug.id}`
}
