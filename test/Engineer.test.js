// Importing class
const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
    describe("Initialization", () => {
        it("should create an Engineer with name, id, email, & github username", () => {
            // Act
            const obj = new Engineer("Dorrian", 12345, "dorrianweber@gmail.com", "dorrianweber");
    
            // Assert
            expect(obj.name).toEqual("Dorrian");
            expect(obj.id).toEqual(12345);
            expect(obj.email).toEqual("dorrianweber@gmail.com");
            expect(obj.github).toEqual("dorrianweber");
        });
    });

    describe("getGithub method", () => {
        it("should return the engineer's GitHub username", () => {
            // Act
            const obj = new Engineer("Dorrian", 12345, "dorrianweber@gmail.com", "dorrianweber");

            // Assert
            expect(obj.getGithub()).toEqual("dorrianweber");
        });
    });

    describe("getRole method", () => {
        it("should return 'Engineer'", () => {
            // Act
            const obj = new Engineer("Dorrian", 12345, "dorrianweber@gmail.com", "dorrianweber");

            // Assert
            expect(obj.getRole()).toEqual("Engineer");
        });
    });
});