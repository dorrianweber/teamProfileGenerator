// Importing parent class
const Employee = require("./Employee");

// Constructing the class & its methods
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    };

    getRole() {
        return "Manager";
    };
};

// Exporting class & methods
module.exports = Manager;