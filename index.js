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
        message: 'Installation instructions.',
        name: 'projectInstructions',
    },
    {
        type: 'input',
        message: 'How do you use it?',
        name: 'projectUsage',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'projectContributions',
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'projectTests',
    },
    {
        type: 'checkbox',
        message: 'What licenses did you use?',
        licenses: ['Apache 2.0', 'Boost Software License 1.0', 'BSD 3-Clause License', 'BSD 2-Clause License'],
        name: 'projectLicenses',
    },
    {
        type: 'input',
        message: 'What is your GitHub uername?',
        name: 'projectGithubUsername',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'projectEmail',
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
