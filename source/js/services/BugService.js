import {stringify as stringifyQuery} from 'qs';

const BugService = {
  makeRequest: query => {
    const defaultQuery = {
      f1: 'bug_mentor',
      o1: 'isnotempty',
      whiteboard_type: 'contains_all',
      bug_status: ['NEW', 'ASSIGNED', 'REOPENED', 'UNCONFIRMED'],
      include_fields: ['id', 'assigned_to', 'summary', 'last_change_time', 'component', 'whiteboard', 'status', 'severity']
    }

    const queryString = stringifyQuery(Object.assign({}, defaultQuery, query), {arrayFormat: 'repeat'})

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
  },
  buildLinkFromId: bugId => `https://bugzilla.mozilla.org/show_bug.cgi?id=${bugId}`
}

export default BugService;
