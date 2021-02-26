// Importing class
const Employee = require("../lib/Employee");

describe("Employee class", () => {
    describe("Initialization", () => {
        it("should create an Employee with name, id, & email", () => {
            // Act
            const obj = new Employee("Dorrian", 12345, "dorrianweber@gmail.com");
    
            // Assert
            expect(obj.name).toEqual("Dorrian");
            expect(obj.id).toEqual(12345);
            expect(obj.email).toEqual("dorrianweber@gmail.com");
        });
    });

    describe("getName method", () => {
        it("should return the employee's name", () => {
            // Act
            const obj = new Employee("Dorrian", 12345, "dorrianweber@gmail.com");

            // Assert
            expect(obj.getName()).toEqual("Dorrian");
        });
    });

    describe("getId method", () => {
        it("should return the employee's ID number", () => {
            // Act
            const obj = new Employee("Dorrian", 12345, "dorrianweber@gmail.com");

            // Assert
            expect(obj.getId()).toEqual(12345);
        });
    });

    describe("getEmail method", () => {
        it("should return the employee's email address", () => {
            // Act
            const obj = new Employee("Dorrian", 12345, "dorrianweber@gmail.com");

            // Assert
            expect(obj.getEmail()).toEqual("dorrianweber@gmail.com");
        });
    });

    describe("getRole method", () => {
        it("should return 'Employee'", () => {
            // Act
            const obj = new Employee("Dorrian", 12345, "dorrianweber@gmail.com");

            // Assert
            expect(obj.getRole()).toEqual("Employee");
        });
    });
});