function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
To install, please run the following command in terminal:

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contribution}

## Tests
${data.tests}

## Questions
If you have any questions about the repo, open an issue or contact  ${data.username} directly at ${data.email}
`;
}

module.exports = generateMarkdown;
