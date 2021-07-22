// Define Intern Class requirements
const Intern = require("../lib/intern");

// Define test functions to test input:
// Can Input School
test("Can input school correctly", () => {
    const school = "CSM";
    const e = new Intern("Anon", 1, "email@email.com", school);
    expect(e.school).toBe(school);
});

// Get Intern Role
test("Confirm role is Intern", () => {
    const role = "Intern";
    const e = new Intern("Anon", 1, "email@email.com", "CSM");
    expect(e.getRole()).toBe(role);
});

// Get Intern School
test("Can getSchool()", () => {
    const school = "CSM";
    const e = new Intern("Anon", 1, "email@email.com", school);
    expect(e.getSchool()).toBe(school);
});

