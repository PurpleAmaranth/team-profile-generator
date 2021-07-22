// Define Manager Class requirements
const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

// Define test functions to test input:
// Can Input Office Number
test("Can input school correctly", () => {
    const testInput = "201";
    const e = new Manager("Gandalf", 1, "email@email.com", testInput);
    expect(e.school).toBe(testInput);
});

// Get Manager Role
test("Confirm role is Manager", () => {
    const testInput = "Manager";
    const e = new Intern("Gandalf", 1, "email@email.com", 201);
    expect(e.getRole()).toBe(testInput);
});

// Get Manager Office Number
test("Can getOfficeNumber()", () => {
    const testInput = 201;
    cosnt e = new Intern("Gandalf", 1, "email@email.com", testInput);
    expect(e.getSchool()).toBe(testInput);
});