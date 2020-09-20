function main() {
  fetchData(API_URL).then((response) => {
    repoCreator(response);
    renderRepoSection(response[0]);
  });
}
window.onload = () => {
  main();
};
const API_URL = "https://api.github.com/orgs/HackYourFuture/repos?per_page=100";
