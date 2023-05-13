// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
// const questions = ['What was your motivation?', 'Why did you build this project?', 'What problem does it solve?', 'What did you learn?'];

// console.log(questions)

var questions = [
    {
        type: "input",
        message:"What is the title of your project?",
        name: "Title",
    },
    
   { 
        type: "input",
        message: "What is your project about? Describe it here:",
        name: "Description",

   },
   {
        type: "input",
        message: "What steps are required to install your project?",
        name: "Installation",
   },
   {
        type: "input",
        message: "How can your project be used?",
        name: "Usage"
   },
   {
        type: "list",
        message: "What license does your project have?",
        name: "license",
        choices: ["MIT", "Apache", "Creative Commons Zerov1.0 Universal", "GNU GPLv3"],
        // lookupbadge sheild io acryonym
   },  
   {
        type: "input",
        message: "Who contributed to this project?",
        name: "Contributing",
   },
   {

        type: "input",
        message: "What tests have you completed for your project?",
        name: "Tests",
   },
   {
        type: "input",
        message: "What is your GitHub username?",
        name: "GitHub",
   },
   {
        type: "input",
        message: "What is your email address?",
        name: "Email",
    },
{
    type: "input",
    message: "How can someone reach you with any questions about your project?",
    name: "QuestionInstructions",
},
 ];
 
 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // const readMe = generateMarkdown(data);
    return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response)=>{
        console.log("README Generated");
        writeToFile("READMEGeneartor.md",generateMarkdown({...response}));
    })
 }



// Function call to initialize app
init();
