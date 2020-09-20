function renderRepoSection(repo) { //Handles the section2
  repoContainer.innerHTML = "";
  const ul = createAndAppend("ul", repoContainer, { class: 'repo-table' });
  const li = createAndAppend("li", ul);
  li.innerHTML = `<table>
      <tbody>
        <tr>
          <th>Repository:</th>
          <td>${repo.name}</td>
        </tr>
        <tr>
          <th>Description:</th>
          <td>${repo.description}d</td>
        </tr>
        <tr>
          <th>Forks :</th>
          <td>${repo.forks}</td>
        </tr>
        <tr>
          <th>Updated at :</th>
          <td>${new Date(repo.updated_at).toDateString()}</td>
        </tr>
      </tbody>
    </table>`;

  fetchData(repo.contributors_url).then(response => renderContributorsSection(response, rows, currentPage)) // fetches contributors data and creates a card for it
}
