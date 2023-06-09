// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'APACHE'){
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }else if(license === 'MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'BSD'){
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  } else if (license ==='GNU'){
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'APACHE'){
    return 'https://www.apache.org/licenses/LICENSE-2.0';
  }
  if (license === 'MIT'){
    return '(https://opensource.org/licenses/MIT)';
  }
  if (license === 'BSD'){
    return 'https://opensource.org/license/bsd-3-clause/';
  }
  if (license === 'GNU'){
    return '(https://www.gnu.org/licenses/gpl-3.0)';}
  if(license === 'None'){
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT'){
    return 'MIT';
  }else if (license === 'APACHE'){
    return 'APACHE';
  }else if (license === 'GNU'){
    return 'GNU';
  }else if (license === 'BSD'){
    return 'BSD'
  }else {
    return '';
  }
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)

  ## Installation
  User must insStall/run: ${data.installation}

  ## Usage
  ${data.usage}

  ## License 
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Contributing
  ${data.contribution}

  ## Tests
  To test: ${data.tests}

  ## Questions
  Questions/Concerns/Etc: [${data.email}](mailto:${data.email})
  
  More of my work:: [${data.username}](https://www.github.com/${data.username})
`;
}

module.exports = generateMarkdown;