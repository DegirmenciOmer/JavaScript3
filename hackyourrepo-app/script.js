"use strict";
//<<<<<<<<<<<<<<<<<<<<<<<<<<<< section1: Header >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const body = document.body;
const main = createAndAppend('main', body);
const section1 = createAndAppend('section', main, { class: 'section1' });
const headerHyf = createAndAppend('header', section1, { class: 'header-hyf' });
const h1OfSection1 = createAndAppend('h1', headerHyf, {
  text: `HYF Repositories`,
  class: 'h1-hyf'
});
const select = createAndAppend('select', headerHyf, { id: 'select-repo-list' });
const repoAndContributorContainer = createAndAppend('div', main, { class: 'repo-and-contributor-container' });

function fetchRepoDetails(APIURL) {
  const promise = new Promise((resolve, reject) => {

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.onload = () => {
      if(xhr.status >= 200 && xhr.status < 400) {
        resolve(xhr.response)
      }
      else {
        reject (new Error(`HTTP error status code: ${xhr.status}`));
      }
    }
    xhr.onerror = () => {
      reject(new Error('Network error'));
    }

    xhr.open('GET', APIURL);
    xhr.send();
  });
  return promise;
}
const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

fetchRepoDetails(url).then((response) => {
  const hyfRepos = response[0]
  console.log(hyfRepos.name);
  console.log(new Date(hyfRepos.updated_at).toDateString());
  console.log(hyfRepos.forks);
  console.log(hyfRepos.description);
})

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
// Select menu inside the header

function selectMenuCreator(repos) {
  const repoContainer = document.querySelector('.repo-container');
  const repoUl = createAndAppend('ul', repoContainer);
  renderRepoDetails(repos[0], repoUl);
  getContributor(repos[0]);
  repos
    .sort((a, b) => a.name.localeCompare(b.name, 'en', {
      numeric: true,
      ignorePunctuation: true
    }, {
      sensitivity: 'base'
    }))
    .forEach((repo, index) => {
      createAndAppend('option', selectMenu, {
        text: `${repo.name}`,
        value: index
      })
      selectMenu.addEventListener('change', (e) => {
        if (e.target.value == index) {
          repoUl.innerText= '';
          contributorsContainer.innerText= '';
          renderRepoDetails(repo, repoUl);
          getContributor(repo);
        }
      });
    })
}


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<< Fetch Repo >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// function fetchRepoDetails() {
//   let repoSection = '';
//   select.innerHTML = '';
//   let repoTable = '';
//   //repoAndContributorContainer.innerHTML = '';
//   repoSection = createAndAppend('section', repoAndContributorContainer, { class: 'repo-section' });
//   const repoKeys = Object.keys(hyfRepos[0]);
//   const repoValues = Object.values(hyfRepos[0]);
//   repoTable = createAndAppend('ul', repoSection, {
//     text: `
//       <li>
//         <table>
//           <tbody>
//             <tr>
//               <th>${repoKeys[0]}:</th>
//               <td>${repoValues[0]}</td>
//             </tr>
//             <tr>
//               <th>${repoKeys[1]}:</th>
//               <td>${repoValues[1]}d</td>
//             </tr>
//             <tr>
//               <th>${repoKeys[2]}:</th>
//               <td>${repoValues[2]}</td>
//             </tr>
//             <tr>
//               <th>${repoKeys[3]}:</th>
//               <td>${repoValues[3]}</td>
//             </tr>
//           </tbody>
//         </table>
//       </li>  
//     `,
//     class: 'repo-table'
//   });
//   const options = hyfRepos.map(repo =>
//     createAndAppend('option', select, {
//       text: repo.name,
//       value: hyfRepos[0]
//     })
//   );
//   const repos = select.options[select.selectedIndex].value;
//   //source: https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript
//   console.log(repos);

// }
// select.onchange = fetchRepoDetails;
// fetchRepoDetails();
// //<<<<<<<<<<<<<<<<<<<<<<<<<<<< Contributors Section >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const contributorsSection = createAndAppend('section', repoAndContributorContainer, {
//   text: `
//     <ul>
//         <li class="contributors">
//           <img src="./hyf.png" alt="temporary image">
//           <a href="https://github.com/HackYourFuture">Contributor Name</a>
//           <span>121</span>
//         </li>
//         <li class="contributors">
//           <img src="./hyf.png" alt="temporary image">
//           <a href="https://github.com/HackYourFuture">Contributor Name</a>
//           <span>121</span>
//         </li>
//     </ul>
//   `,
//   class: 'contributors-section'
// });
