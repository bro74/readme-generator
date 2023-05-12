// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ['What was your motivation?', 'Why did you build this project?', 'What problem does it solve?', 'What did you learn?'];

console.log(questions)

inquirer.prompt([
    {
        type: 'input',
        name: 'motivation',
        message: questions[0],
    },
    {
        type: 'input',
        name: 'build',
        message: questions[1],
    },
    {
        type: 'input',
        name: 'problem',
        message: questions[2],
    },
    {
        type: 'input',
        name: 'learn',
        message: questions[3],
    },
]).then((answers) => {
    const fileName = 'README.md';
    const data = `
    # ${answers.motivation}
    
    ## Description
    
    ${answers.build}
    
    ## Problem Solved
    
    ${answers.problem}
    
    ## What I Learned
    
    ${answers.learn}
    `;
    writeToFile(fileName, data);
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
