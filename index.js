// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./page_template');

// TODO: Create an array of questions for user input

 const questions = () => {
   // This returns all of the user input to the const.
    return inquirer.prompt([ 
        {
        name: "name",
        type: "input",
        message: "What is the Name of your/the Project?"
        },
        {
        name: "lisence",
        type: "input",
        message: "What Lisence did you use?"
        },
        {
        name: "desc",
        type: "input",
        message: "Give a description of your/the Project."
        },
        {
        name: "install",
        type: "input",
        message: "What steps are needed to run your/the project?"
        },
        {
        name: "usage",
        type: "input",
        message: "What is the expected usage of your/the project?"
        },
        {
        name: "cont",
        type: "input",
        message: "Did anyone else contribute? (If no one else did, respond with N/A)"
        },
        {
        name: "github",
        type: "input",
        message: "What is your GitHub link?"
        },
        {
        name: "email",
        type: "input",
        message: "What is your email?"
        },
        {
        name: "tests",
        type: "input",
        message: "What kind of tests have been run on your/the project?"
        },
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

};

// TODO: Create a function to initialize app
function init() {
    questions()
    writeToFile();
};

// Function call to initialize app
init();