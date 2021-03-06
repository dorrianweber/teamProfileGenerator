// Function that generates HTML page for roster of employees
const generateHTML = (employeeData) => {

return `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <!-- Link for Bootstrap -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <!-- Link for CSS file -->
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header class="pageHeader">
            <h1>My Team</h1>
        </header>
        
        ${employeeData}
    </body>
</html>`};

// Exporting genereateHTML() function
module.exports = generateHTML;