// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license === "true"
    ? `[![license:MIT](https://img.shields.io/badge/license-${data.license}-blue.svg)](https://shields.io/)`
    : "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)";
    case "GNU":
      return "[https://img.shields.io/badge/License-GPL%20v2-blue.svg](https://img.shields.io/badge/License-GPL%20v2-blue.svg)";
    case "Apache":
      return "[https://opensource.org/licenses/Apache-2.0](https://opensource.org/licenses/Apache-2.0)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license !== "None of the above"
    ? `Look for the project under ${license}`
    : "Please choose a license as you don't have one.";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## License:
  ${renderLicenseBadge(data.license)}
  [![license](https://img.shields.io/badge/license-${
    data.license
  }-blue.svg)](https://shields.io/)
  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Contact Information](#contact-information)
  ## Description:
  ${data.description}
  ## Installation:
  ${data.installation}
  ## Usage:
  ${data.usage}
  ## License: 
 ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  ## Contribution: 
  ${data.contribution}
  ## Testing: 
  ${data.test}
  ## Contact information:
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}](mailto:user@example.com) `;
}

module.exports = generateMarkdown;
