// fs is a Node standard library package for reading and writing files
const fs = require("fs");
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
        }
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
            message: "What command should be run to install dependencies?",
            name: "installCode"
        },
        {
            type: "input",
            message: "How does the user utilize the repo?",
            name: "usage"
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
        {
            type: "input",
            message: "What command is needed to run tests?",
            name: "tests"
        }
];

function writeToFile(fileName, data) {
}

// Function init initiates the prompts for questions array
// When user gives response, writeToFile method is passed (filename, data)
function init() {
    inquirer.prompt(questions).then(response => {
        writeToFile("README.md", generateMarkdown({ ...response}))
    })
}

init();
