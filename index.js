//Dependencies
const inquire = require('inquirer');
const fs = require('fs');
const markdown = require ('./utils/generateMarkdown');

//Create questions
const questions = [
    {
        type: 'input',
        message: 'What is the project Title?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Provide a brief description of the project:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Does the User have to install anything or run any commands to use this application?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Give a description on how to use the application:',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'What does the User need to know about contributions/contributing to the repo?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'How can the user run any tests:',
        name: 'tests'
    },
    {
        type: 'list',
        message: 'What license was used for the project?',
        name: 'license',
        choices: [
            'APACHE',
            'MIT',
            'BSD',
            'GPL',
            'None'
        ]
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your Github username:',
        name: 'username'
    },
];

//Function to write readME file 
function writeToFile(fileName, data){
    let content = markdown(data);
    fs.writeFile(fileName, content, (err) =>
    (err) ? 'error': 'success')
};

//Function to initialize 
function init () {
    inquire
    .prompt (questions)
    .then((data) => {
        const fileName = 'readMe.md';
        writeToFile(fileName, data);
    });
};

init ();