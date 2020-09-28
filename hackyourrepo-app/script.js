"use strict";

const placeholderRepos = [
  {
    name: 'SampleRepo1',
    description: 'This repository is meant to be a sample',
    forks: 5,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'AndAnotherOne',
    description: 'Another sample repo! Can you believe it?',
    forks: 9,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'HYF-Is-The-Best',
    description:
      "This repository contains all things HackYourFuture. That's because HYF is amazing!!!!",
    forks: 130,
    updated: '2020-05-27 12:00:00',
  },
];

function createAndAppend(name, parent, options = {}) {//source: hyf earlier javascript3 homework
  const elem = document.createElement(name);
  parent.appendChild(elem);
  Object.entries(options).forEach(([key, value]) => {
    if (key === 'text') {
      elem.innerHTML = value;
    } else {
      elem.setAttribute(key, value);
    }
  });
  return elem;
}
//<<<<<<<<<<<<<<<<<<<<<<<<<<<< section1: Header >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const body = document.body;
const main = createAndAppend('main', body);
const section1 = createAndAppend('section', main, { class: 'section1' });
const headerHyf = createAndAppend('header', section1, { class: 'header-hyf' });
const h1OfSection1 = createAndAppend('h1', headerHyf, {
  text: `HYF Repositories`,
  class: 'h1-hyf'
});
// Select menu inside the header
const select = createAndAppend('select', headerHyf, { id: 'select-repo-list' });

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Fetch Repo >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const repoAndContributorContainer = createAndAppend('div', main, { class: 'repo-and-contributor-container' });
function fetchRepoDetails() {
  let repoSection = '';
  select.innerHTML = '';
  let repoTable = '';
  //repoAndContributorContainer.innerHTML = '';
  repoSection = createAndAppend('section', repoAndContributorContainer, { class: 'repo-section' });
  const repoKeys = Object.keys(placeholderRepos[0]);
  const repoValues = Object.values(placeholderRepos[0]);
  repoTable = createAndAppend('ul', repoSection, {
    text: `
      <li>
        <table>
          <tbody>
            <tr>
              <th>${repoKeys[0]}:</th>
              <td>${repoValues[0]}</td>
            </tr>
            <tr>
              <th>${repoKeys[1]}:</th>
              <td>${repoValues[1]}d</td>
            </tr>
            <tr>
              <th>${repoKeys[2]}:</th>
              <td>${repoValues[2]}</td>
            </tr>
            <tr>
              <th>${repoKeys[3]}:</th>
              <td>${repoValues[3]}</td>
            </tr>
          </tbody>
        </table>
      </li>  
    `,
    class: 'repo-table'
  });
  const options = placeholderRepos.map(repo =>
    createAndAppend('option', select, {
      text: repo.name,
      value: placeholderRepos[0]
    })
  );
  const repos = select.options[select.selectedIndex].value;
  //source: https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript
  console.log(repos);

}
fetchRepoDetails();
select.onchange = () => {
  repoSection.innerHTML = '';
  fetchRepoDetails();
}
//<<<<<<<<<<<<<<<<<<<<<<<<<<<< Contributors Section >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const contributorsSection = createAndAppend('section', repoAndContributorContainer, {
  text: `
    <ul>
        <li class="contributors">
          <img src="./hyf.png" alt="temporary image">
          <a href="https://github.com/HackYourFuture">Contributor Name</a>
          <span>121</span>
        </li>
        <li class="contributors">
          <img src="./hyf.png" alt="temporary image">
          <a href="https://github.com/HackYourFuture">Contributor Name</a>
          <span>121</span>
        </li>
    </ul>
  `,
  class: 'contributors-section'
});
