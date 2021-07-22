// Define Employee Class requirements
const Employee = require("../lib/Employee");

// Define test functions to test input:
// Can create a new Employee
test("Can Create Employee", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

// Can Name Employee
test("Can Name Employee", () => {
  const name = "Wylhelm";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

// Set Employee ID
test("Can set ID", () => {
  const ID = 300;
  const e = new Employee("Wylhelm", ID);
  expect(e.id).toBe(ID);
});

// Set Employee Email
test("Can set email", () => {
  const email = "email@email.com";
  const e = new Employee("Wylhelm", 300, email);
  expect(e.email).toBe(email);
});

// Can get Employee Name
test("Can getName()", () => {
  const name = "Wylhelm";
  const e = new Employee(name);
  expect(e.getName()).toBe(name);
});

// Can get Employee ID
test("Can getId()", () => {
  const ID = 300;
  const e = new Employee("Wylhelm", ID);
  expect(e.getId()).toBe(ID);
});

// Can get Employee Email
test("Can getEmail()", () => {
  const email = "email@email.com";
  const e = new Employee("Wylhelm", 300, email);
  expect(e.getEmail()).toBe(email);
});

// Can get Employee Role
test("Employee is Role", () => {
  const Role = "Employee";
  const e = new Employee("Wylhelm", 300, "email@email.com");
  expect(e.getRole()).toBe(Role);
});