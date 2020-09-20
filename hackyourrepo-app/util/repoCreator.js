function repoCreator(repoData) { //sorts the repo list, fetches the options, and trigers the section2-repo container
  repoData.sort((a, b) => a.name.localeCompare(b.name, 'en', {
    numeric: true,
    ignorePunctuation: true
  }, {
    sensitivity: 'base'
  })).forEach((repo, index) => {
    createAndAppend("option", dropMenu, { text: repo.name, value: index });
    dropMenu.addEventListener("change", (e) => {
      if (e.target.value == index) {
        renderRepoSection(repo);
      }
    });
  });
}
