const Employee = require("../lib/Employee");

describe("Employee", () => {
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

    describe("getName", () => {
        it("should return the employee's name", () => {
            // Act
            const obj = new Employee("Dorrian", 12345, "dorrianweber@gmail.com").getName();

            // Assert
            expect(obj).toEqual("Dorrian");
        });
    });

    describe("getId", () => {
        it("should return the employee's ID number", () => {
            // Act
            const obj = new Employee("Dorrian", 12345, "dorrianweber@gmail.com").getName();

            // Assert
            expect(obj).toEqual(12345);
        });
    });

    describe("getEmail", () => {
        it("should return the employee's email address", () => {
            // Act
            const obj = new Employee("Dorrian", 12345, "dorrianweber@gmail.com").getName();

            // Assert
            expect(obj).toEqual("dorrianweber@gmail.com");
        });
    });

    describe("getRole", () => {
        it("should return 'Employee'", () => {
            // Act
            const obj = new Employee("Dorrian", 12345, "dorrianweber@gmail.com").getName();

            // Assert
            expect(obj).toEqual("Employee");
        });
    });
});