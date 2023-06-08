const generateInfo = document.getElementById("generate-info");
const firstNameValue = document.getElementById("firstname");
const lastNameValue = document.getElementById("lastname");
const titleNameValue = document.getElementById("title");
const linkedinValue = document.getElementById("link-1");
const githubValue = document.getElementById("link-2");
const portfolioValue = document.getElementById("link-3");

const firstNameReplace = document.getElementById("firstname-info");
const lastNameReplace = document.getElementById("lastname-info");
const titleReplace = document.getElementById("title-info");
const linkedinReplace = document.getElementById("link-linkedin");
const githubReplace = document.getElementById("link-github");
const portfolioReplace = document.getElementById("link-portfolio");

function updateInformation() {
  let changeFirstName = firstNameValue.value;
  let changeLastName = lastNameValue.value;
  let changeTitle = titleNameValue.value;
  let changeLinkedin = linkedinValue.value;
  let changeGithub = githubValue.value;
  let changePortfolio = portfolioValue.value;

  firstNameReplace.textContent = changeFirstName;
  lastNameReplace.textContent = changeLastName;
  titleReplace.textContent = changeTitle;

  // change url for icons
  linkedinReplace.href = changeLinkedin;
  githubReplace.href = changeGithub;
  portfolioReplace.href = changePortfolio;

  //   clean inputs info.
  const inputsValue = document.querySelectorAll("input[type='text']");
  inputsValue.forEach((input) => {
    input.value = "";
  });
}

generateInfo.addEventListener("click", () => updateInformation());
