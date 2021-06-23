// TODO: Create a function to initialize app
function init() {

// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generate = require('./utils/generateMarkdown')
const path = require('path')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of the project?',
        name: 'projectTitle',
    },
    {
        type: 'input',
        message: 'Describe your application.',
        name: 'projectDescription',
    },
    {
        type: 'input',
        message: 'What is your table of contents?',
        name: 'projectTable',
    },
    {
        type: 'input',
        message: 'What is the deployment link?',
        name: 'projectDescription',
    }
];

// TODO: Create a function to write README file
inquirer.prompt(questions)
.then((response) => {
    return fs.writeFileSync(path.join (process.cwd(), 'README.md'), generate(response))
})

}

// Function call to initialize app
init();
