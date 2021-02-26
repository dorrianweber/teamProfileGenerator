// Importing parent class
const Employee = require("./Employee");

// Constructing the class & its methods
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
    };

    getSchool() {
        return this.school;
    };

    getRole() {
        return "Intern";
    };
};

// Exporting class & methods
module.exports = Intern;