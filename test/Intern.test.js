// Importing class
const Intern = require("../lib/Intern");

describe("Intern class", () => {
    describe("Initialization", () => {
        it("should create an Intern with name, id, email, & school", () => {
            // Act
            const obj = new Intern("Dorrian", 12345, "dorrianweber@gmail.com", "UC Davis");
    
            // Assert
            expect(obj.name).toEqual("Dorrian");
            expect(obj.id).toEqual(12345);
            expect(obj.email).toEqual("dorrianweber@gmail.com");
            expect(obj.school).toEqual("UC Davis");
        });
    });

    describe("getSchool method", () => {
        it("should return the intern's GitHub username", () => {
            // Act
            const obj = new Intern("Dorrian", 12345, "dorrianweber@gmail.com", "UC Davis");

            // Assert
            expect(obj.getSchool()).toEqual("UC Davis");
        });
    });

    describe("getRole method", () => {
        it("should return 'Intern'", () => {
            // Act
            const obj = new Intern("Dorrian", 12345, "dorrianweber@gmail.com", "UC Davis");

            // Assert
            expect(obj.getRole()).toEqual("Intern");
        });
    });
});