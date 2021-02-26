// Importing class
const Manager = require("../lib/Manager");

describe("Manager class", () => {
    describe("Initialization", () => {
        it("should create a Manager with name, id, email, & office number", () => {
            // Act
            const obj = new Manager("Dorrian", 12345, "dorrianweber@gmail.com", 54321);
    
            // Assert
            expect(obj.name).toEqual("Dorrian");
            expect(obj.id).toEqual(12345);
            expect(obj.email).toEqual("dorrianweber@gmail.com");
            expect(obj.officeNumber).toEqual(54321);
        });
    });

    describe("getRole method", () => {
        it("should return 'Manager'", () => {
            // Act
            const obj = new Manager("Dorrian", 12345, "dorrianweber@gmail.com", 54321);

            // Assert
            expect(obj.getRole()).toEqual("Manager");
        });
    });
});