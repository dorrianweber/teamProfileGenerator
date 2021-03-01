const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: "input",
            name: "mgrName",
            message: "What is the name of your team manager?"
        },

        {
            type: "number",
            name: "mgrID",
            message: "Their employee ID number?"
        },

        {
            type: "input",
            name: "mgrEmail",
            message: "How about their email address?"
        },

        {
            type: "number",
            name: "officeNumber",
            message: "And finally, their office number?"
        },
    ])
    .then((answers) => {
        const htmlPage = generateHTML(answers);
        console.log(htmlPage);

        fs.writeFile("index.html", htmlPage, (err) =>
            err ? console.err(err) : console.log("Success!")
        );
    });

    const generateHTML = ({x, y, z}) =>
    `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Team Profile</title>
            </head>
            <body>
                <div class="card">
                    <h4> ${name} </h4>
                    <br>

                    <h5> ${role} </h5>
                    <br>

                    <p> ID: ${id} </p>
                    <p> Email: <a href="mailto:${email}"> ${email} </a> </p>
                    <p> Office number: ${officeNumber} </p>
                </div>

                <div class="card">
                    <h4> ${name} </h4>
                    <br>

                    <h5> ${role} </h5>
                    <br>

                    <p> ID: ${id} </p>
                    <p> Email: <a href="mailto:${email}"> ${email} </a> </p>
                    <p> Github: <a href="https://github.com/${github}" target="_blank"> ${github} </a> </p>
                </div>

                <div class="card">
                    <h4> ${name} </h4>
                    <br>

                    <h5> ${role} </h5>
                    <br>

                    <p> ID: ${id} </p>
                    <p> Email: <a href="mailto:${email}"> ${email} </a> </p>
                    <p> School: ${school} </p>
                </div>
            </body>
        </html>
    `;