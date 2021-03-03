const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

const generateHTMLFile = require('./src/generateHTML');

let employeeList = [];

const promptUser = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the employee's name?"
        },

        {
            type: "number",
            name: "id",
            message: "Their employee ID number?"
        },

        {
            type: "input",
            name: "email",
            message: "How about their email address?"
        },

        {
            type: "list",
            name: "role",
            message: "Lastly, what is their role?",
            choices: ["Manager", "Engineer", "Intern"]
        },

        {
            when: input => {
                return input.role == "Manager"
            },
            type: "input",
            name: "officeNumber",
            message: "What is their office number?",
        },

        {
            when: input => {
                return input.role == "Engineer"
            },
            type: "input",
            name: "github",
            message: "What is the engineer's github username?",
        },

        {
            when: input => {
                return input.role == "Intern"
            },
            type: "input",
            name: "school",
            message: "What is the intern's school?",
        },

        {
            type: "list",
            name: "continue",
            message: "Would you like to add another employee?",
            choices: ["Yes", "No"]
        }
    ])

    .then((answers) => {
        employeeList.push(answers);
        console.log(employeeList);

        if (answers.continue === "Yes"){
            promptUser();
        }

        else {
            return employeeList;
        };
    });
};

const writeHTML = util.promisify(fs.writeFile);

const init = () => {
    promptUser()
        // .then((answers) =>{
        //     const htmlPage = generateHTML(answers);

        //     writeHTML(`${__dirname}/dist/index.html`, htmlPage)
        // })
        // .then(() => console.log("Wrote file successfully."))
        // .catch((err) => console.error(err));
}

init();