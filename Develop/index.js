// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of the project?',
        name: 'projectTitle',
        // check if input field is empty else ask user to provide a proper title
        validate: (value) => { 
            if (value) {
                return true
            }
            else {
                return 'Please input a proper title!'
            }}
    },
    {
        type: 'input',
        message: 'Describe your application.',
        name: 'projectDescription',
        validate: (value) => { 
            if (value) {
                return true
            }
            else {
                return 'Please write a short description!'
            }}
    },
    {
        type: 'input',
        message: 'What are some lessons you learned?',
        name: 'projectLessons',
        validate: (value) => { 
            if (value) {
                return true
            }
            else {
                return 'Please list some lessons learned!'
            }}
    },
    {
        type: 'input',
        message: 'What is the deployment link?',
        name: 'projectDescription',
        validate: (value) => { 
            if (value) {
                return true
            }
            else {
                return 'Please link your deployment here!'
            }}
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
