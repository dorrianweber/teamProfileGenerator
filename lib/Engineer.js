// Importing parent class
const Employee = require("./Employee");

// Constructing the class & its methods
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
    };

    getGithub() {
        return this.github;
    };

    getRole() {
        return "Engineer";
    };
};

// Exporting class & methods
module.exports = Engineer;