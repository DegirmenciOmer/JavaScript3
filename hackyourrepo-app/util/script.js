"use strict";

//Element definitions
// const body = document.querySelector("body");
// const headerSection = createAndAppend("section", body, { class: "section1" }); // 1st section
// const dropMenu = createAndAppend("select", headerSection);
// const mainContainer = createAndAppend("main", body, {
//   class: "main-container",
// });
// const repoContainer = createAndAppend("section", mainContainer, {
//   class: "repo-section",
// });
// const contributorSection = createAndAppend("section", mainContainer, {
//   class: "contributors-section",
// });

function createAndAppend(name, parent, options = {}) { // A very useful function which I inherited from the previous js3 homework.
  const elem = document.createElement(name);
  parent.appendChild(elem);
  Object.entries(options).forEach(([key, value]) => {
    if (key === "text") {
      elem.innerHTML = value;
    } else {
      elem.setAttribute(key, value);
    }
  });
  return elem;
}

// function fetchData(url) {
//   const promise = new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.responseType = "json";

//     xhr.onload = () => {
//       if (xhr.status >= 200 && xhr.status < 400) {
//         resolve(xhr.response);
//       } else {
//         reject(new Error(`HTTP error status code: ${xhr.status}`));
//       }
//     };
//     xhr.onerror = () => {
//       reject(new Error("Network error"));
//     };

//     xhr.open("GET", url);
//     xhr.send();
//   });
//   return promise;
// }


// function repoCreator(repoData) { //sorts the repo list, fetches the options, and trigers the section2-repo container
//   repoData.sort((a, b) => a.name.localeCompare(b.name, 'en', {
//     numeric: true,
//     ignorePunctuation: true
//   }, {
//     sensitivity: 'base'
//   })).forEach((repo, index) => {
//     createAndAppend("option", dropMenu, { text: repo.name, value: index });
//     dropMenu.addEventListener("change", (e) => {
//       if (e.target.value == index) {
//         renderRepoSection(repo);
//       }
//     });
//   });
// }

// function renderRepoSection(repo) { //Handles the section2
//   repoContainer.innerHTML = "";
//   const ul = createAndAppend("ul", repoContainer, {class: 'repo-table'});
//   const li = createAndAppend("li", ul);
//   li.innerHTML = `<table>
//     <tbody>
//       <tr>
//         <th>Repository:</th>
//         <td>${repo.name}</td>
//       </tr>
//       <tr>
//         <th>Description:</th>
//         <td>${repo.description}d</td>
//       </tr>
//       <tr>
//         <th>Forks :</th>
//         <td>${repo.forks}</td>
//       </tr>
//       <tr>
//         <th>Updated at :</th>
//         <td>${new Date(repo.updated_at).toDateString()}</td>
//       </tr>
//     </tbody>
//   </table>`;

//   fetchData(repo.contributors_url).then(response =>renderContributorsSection(response)) // fetches contributors data and creates a card for it
// }

function renderContributorsSection(contributors) {//section 3
    contributorSection.innerHTML = ''
    const ul = createAndAppend('ul', contributorSection)
    contributors.forEach(person => {
        const li = createAndAppend('li', ul, { class : 'contributors'})
        createAndAppend('img',li, { src : person.avatar_url, class : 'avatar'})
        createAndAppend('span',li, {
          text: person.login,
          class: 'contributor-name'})
        createAndAppend('span',li, {
          text: person.contributions,
        class: 'contribution-num'})
    })
}

const API_URL = "https://api.github.com/orgs/HackYourFuture/repos?per_page=100";

function main() {
  fetchData(API_URL).then((response) => {
    repoCreator(response);
    renderRepoSection(response[0]);
  });
}


window.onload = () => {
  main();
};
