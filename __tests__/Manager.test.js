// Define Manager Class requirements
const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

// Define test functions to test input:
// Can Input Office Number
test("Can input office number correctly", () => {
    const officeNumber = "201";
    const e = new Manager("Gandalf", 1, "email@email.com", officeNumber);
    expect(e.officeNumber).toBe(officeNumber);
});

// Get Manager Role
test("Confirm role is Manager", () => {
    const role = "Manager";
    const e = new Intern("Gandalf", 1, "email@email.com", 201);
    expect(e.getRole()).toBe(role);
});

// Get Manager Office Number
test("Can getOfficeNumber()", () => {
    const officeNumber = 201;
    const e = new Intern("Gandalf", 1, "email@email.com", officeNumber);
    expect(e.getOfficeNumber()).toBe(officeNumber);
});