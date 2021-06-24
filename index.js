// TODO: Create a function to initialize app
function init() {

// TODO: Include packages needed for this application
// all required packages imported for use
const inquirer = require('inquirer')
const fs = require('fs')
const generate = require('./utils/generateMarkdown')
const path = require('path')

// TODO: Create an array of questions for user input
// list of questions to be asked per readme guidelines linked to markdown via the name of the object.
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
        choices: ['Apache 2.0', 'Boost Software License 1.0', 'BSD 3-Clause License', 'BSD 2-Clause License'],
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
// creates a readme called 'README.md' in the folder
inquirer.prompt(questions)
.then((response) => {
    return fs.writeFileSync(path.join (process.cwd(), 'README.md'), generate(response))
})

}

// function call to initialize app
init();
