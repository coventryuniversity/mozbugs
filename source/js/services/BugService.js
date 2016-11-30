const BugService = {
  loadBugs: filterQuery =>
    fetch(`https://bugzilla.mozilla.org/rest/bug?${filterQuery}`)
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
    .then(data => data.bugs),
  buildLinkFromId: bugId => `https://bugzilla.mozilla.org/show_bug.cgi?id=${bugId}`
}

export default BugService;
