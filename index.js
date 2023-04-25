// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
console.log("This is a README markdown generator.");
console.log("Please answer the following questions in regards to your project for a high quality README.");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },

    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project.',
    },
    
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'What are the steps to use your project?',
    },

    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
    },

    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license for your project.',
        choices: ['MIT', 'GNU', 'Apache', 'None of the above'],
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'How can other users make contributions to your project?',
    },

    {
        type: 'input',
        name: 'test',
        message: 'How can the user test this project?',
    },

    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username.',
    },

    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.',
    },

    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('Success!')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    })
};

// Function call to initialize app
init();
