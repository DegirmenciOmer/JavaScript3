  let currentPage = 1;
  let rows = 5;

function renderContributorsSection(contributors, rowsPerPage, page) {//section 3
  contributorSection.innerHTML = '';
  page--;
  
  let start = rowsPerPage * page;
  let end = start + rowsPerPage;
  let paginatedItems = contributors.slice(start, end);

  const ul = createAndAppend('ul', contributorSection)
  for (let i = 0; i < paginatedItems.length; i++) {
    let person = paginatedItems[i];
    const contributorsList = createAndAppend('li', ul, { class: 'contributors' })
    createAndAppend('img', contributorsList, { src: person.avatar_url, class: 'avatar' })
    createAndAppend('span', contributorsList, {
      text: person.login,
      class: 'contributor-name'
    })
    createAndAppend('span', contributorsList, {
      text: person.contributions,
      class: 'contribution-num'
    })

  }
  setupPagination(contributors, rowsPerPage)
}