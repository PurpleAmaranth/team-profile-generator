// Define Intern Class requirements
const Intern = require("../lib/intern");

// Define test functions to test input:
// Can Input School
test("Can input school correctly", () => {
    const testInput = "CSM";
    const e = new Intern("Anon", 1, "email@email.com", testInput);
    expect(e.school).toBe(testInput);
});

// Get Intern Role
test("Confirm role is Intern", () => {
    cosnt testInput = "Intern";
    const e = new Intern("Anon", 1, "email@email.com", "CSM");
    expect(e.getRole()).toBe(testInput);
});

// Get Intern School
test("Can getSchool()", () => {
    const testInput = "CSM";
    cosnt e = new Intern("Anon", 1, "email@email.com", testInput);
    expect(e.getSchool()).toBe(testInput);
});

