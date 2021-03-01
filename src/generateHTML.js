const generateHTML = (answers) =>

`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <!-- Link for Bootstrap -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    </head>
    <body>
        <div class="card">
            <div class="card-body">
                <h4 class="card-title"> ${name} </h4>
                <h5 class="card-subtitle mb-2 text-muted"> ${role} </h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"> ID: ${id} </li>
                    <li class="list-group-item"> Email: <a href="mailto:${email}"> ${mgrEmail} </a> </li>
                    <li class="list-group-item"> Office number: ${officeNumber} </li>
                </ul>
            </div>
        </div>
    </body>
</html>`;

// HTML GENERATION FOR ENGINEER & INTERN
    // <div class="card">
    //     <h4> ${name} </h4>
    //     <br>

    //     <h5> ${role} </h5>
    //     <br>

    //     <p> ID: ${id} </p>
    //     <p> Email: <a href="mailto:${email}"> ${email} </a> </p>
    //     <p> Github: <a href="https://github.com/${github}" target="_blank"> ${github} </a> </p>
    // </div>

    // <div class="card">
    //     <h4> ${name} </h4>
    //     <br>

    //     <h5> ${role} </h5>
    //     <br>

    //     <p> ID: ${id} </p>
    //     <p> Email: <a href="mailto:${email}"> ${email} </a> </p>
    //     <p> School: ${school} </p>
    // </div>