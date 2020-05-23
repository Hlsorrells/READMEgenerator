// fs is a Node standard library package for reading and writing files
const fs = require("fs");
// path module is needed to work with the directories and file paths
const path = require("path");
// inquirer is a collection of common interactive command line user interfaces
const inquirer = require("inquirer");
// Tells Node where to find the generateMarkdown
const generateMarkdown = require("./utils/generateMarkdown.js");

// Array of questions for the user to interface with
const questions = [
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the URL to your project?",
            name: "URL"
        },
        {
            type: "input",
            message: "What is your project title?",
            name: "title"
        },
        {
            type: "input",
            message: "Please provide a short description of the project.",
            name: "description"
        },
        {
            type: "input",
            message: "How does the user utilize the repo?",
            name: "usage"
        },
        {
            type: "input",
            message: "What command should be run to install dependencies?",
            name: "installCode"
        },
        {
            type: "input",
            message: "What command is needed to run tests?",
            name: "tests"
        },
        {
            type: "list",
            message: "Is the project protected by a license?",
            name: "license",
            choices: [
                "MIT",
                "ISC",
                "UNLICENSED"
            ]
        },
        {
            type: "input",
            message: "How can the user make contributions to the repo?",
            name: "contribution"
        },

];

// process.cwd gets the current working directory of the node process
// path.join will join the current working director to the fileName creating the file path
// writeFileSync writes the data to the file path synchronously
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// Function init initiates the prompts for questions array
// When user gives response, writeToFile method is passed (filename, data)
function init() {
    inquirer.prompt(questions).then(response => {
        writeToFile("README.md", generateMarkdown({ ...response}))
    })
}

init();
