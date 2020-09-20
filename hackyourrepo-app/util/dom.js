const body = document.querySelector("body");
const headerSection = createAndAppend("section", body, { class: "section1" }); // 1st section
const dropMenu = createAndAppend("select", headerSection);
const mainContainer = createAndAppend("main", body, {
  class: "main-container",
});
const repoContainer = createAndAppend("section", mainContainer, {
  class: "repo-section",
});
const contributorSection = createAndAppend("section", mainContainer, {
  class: "contributors-section",
});


