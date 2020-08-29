"use strict";

/*
  Write here your JavaScript for HackYourRepo!

  This application, HackYourRepo, does 2 things:

It makes connection to the GitHub API and retrieves all the repositories found in the HackYourFuture account.
It displays those repositories in an alphabetically-ordered list. When a user clicks on any of the repository names it will show more details about it.
In the course of the next 3 weeks you'll be writing the necessary code to make all of this work!

4.1 Requirements
To get started, make sure you're in the right GIT branch: week1-[YOURNAME]. Then, navigate to the hackyourrepo-app folder and become familiar with the files there.

This week you're required to (1) setup the HTML structure of the application. In addition, you are expected to (2) style the application to make it user-friendly.

Here are the requirements for the HTML:

Include 3 <section> tags
Include a <select> tag
*/
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

function createAndAppend(name, parent, options = {}) {
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
const section1 = createAndAppend('section', main, {class: 'section1'});
const headerHyf = createAndAppend('header', section1, {class: 'header-hyf'});
const h1OfSection1 = createAndAppend('h1', headerHyf, {
  text: `HYF Repositories`,
  class: 'h1-hyf'
});

// Select menu inside the header
const select = createAndAppend('select', headerHyf);
const options = placeholderRepos.map(repo =>
  createAndAppend('option', select, {
    text: repo.name,
    value: repo
  })
)
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Fetch Repo >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const repoAndContributorContainer = createAndAppend('div', main, {class: 'repo-and-contributor-container'});
const repoSection = createAndAppend('section', repoAndContributorContainer, {class: 'repo-section'});
options.forEach(option => console.log(option))
const repoNames = placeholderRepos.map(repo => repo.name)
const repoKeys = Object.keys(placeholderRepos[0])
const repoValues = Object.values(placeholderRepos[0])
const repoTable = createAndAppend('ul', repoSection, {
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
console.log(repoTable);

  // repoKeys.forEach((repoInfo, index) => {
  //   const p = createAndAppend('p', li);
  //   const span1 = createAndAppend('span', p, {
  //     text: names[index],
  //     class: 'repo-span bold'
  //   })
  //   const span2 = createAndAppend('span', p, {
  //     text: `: ${repoInfo}`,
  //     class: 'repo-span'
  //   });
  // })


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
