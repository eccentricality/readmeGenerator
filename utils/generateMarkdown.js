// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// created function to do exactly as asked, one each for the badge, license link, and a short blurb to describe which license the project is covered under.
function renderLicenseBadge(data) {
  const licenseName = data.projectLicenses[0];
  let badgeLink = '';

  if (licenseName === 'Apache 2.0') {
    badgeLink = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  };

  if (licenseName === 'Boost Software License 1.0') {
    badgeLink = `![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)`
  };

  if (licenseName === 'BSD 3-Clause License') {
    badgeLink = `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`
  };

  if (licenseName === 'BSD 2-Clause License') {
    badgeLink = `![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)`
  };

  if (licenseName === '') {
    badgeLink = ``
  };

  return badgeLink;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  const licenseName = data.projectLicenses[0];
  let licenseLink = '';

  if (licenseName === 'Apache 2.0') {
    licenseLink = `https://opensource.org/licenses/Apache-2.0`
  };

  if (licenseName === 'Boost Software License 1.0') {
    licenseLink = `https://www.boost.org/LICENSE_1_0.txt`
  };

  if (licenseName === 'BSD 3-Clause License') {
    licenseLink = `https://opensource.org/licenses/BSD-3-Clause`
  };

  if (licenseName === 'BSD 2-Clause License') {
    licenseLink = `https://opensource.org/licenses/BSD-2-Clause`
  };

  if (licenseName === '') {
    licenseLink = ``
  };

  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  const licenseName = data.projectLicenses[0];
  let licenseLink = '';

  if (licenseName === 'Apache 2.0') {
    licenseLink = `This project is covered under Apache 2.0 license.`
  };

  if (licenseName === 'Boost Software License 1.0') {
    licenseLink = `This project is covered under Boost Software License 1.0' license.`
  };

  if (licenseName === 'BSD 3-Clause License') {
    licenseLink = `This project is covered under BSD 3-Clause License license.`
  };

  if (licenseName === 'BSD 2-Clause License') {
    licenseLink = `This project is covered under BSD 2-Clause License license.`
  };

  if (licenseName === '') {
    licenseLink = ``
  };

  return licenseLink;
}

// TODO: Create a function to generate markdown for README
// takes the data and plugs a pre-generated content as per guidelines, filled by the content user input via index.js
function generateMarkdown(data) {
  return `## Title: ${data.projectTitle}

  ${renderLicenseBadge(data)}

  ## Description
  ${data.projectDescription}

  ## Table of Contents
    1. [Installation](#Installation)
    2. [Usage](#Usage)
    3. [License](#License)
    4. [Contributing](#Contributing)
    5. [Tests](#Tests)
    6. [Questions](#Questions)

  ## Installation
  ${data.projectInstructions}

  ## Usage
  ${data.projectUsage}

  ## License
  ${renderLicenseSection(data)}
  ${renderLicenseLink(data)}

  ## Contributing
  ${data.projectContributions}

  ## Tests
  ${data.projectTests}

  ## Questions
  Find me at: https://github.com/${data.projectGithubUsername}

  Email me with additional questions at: ${data.projectEmail}
`;
}

module.exports = generateMarkdown;
