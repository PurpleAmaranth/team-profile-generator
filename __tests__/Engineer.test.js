// Define Engineer Class requirements
const Engineer = require("../lib/Engineer");

// Define test functions to test input:
// Can Input GitHub
test("Can set GitHub", () => {
  const gitHub = "GitHubGuy";
  const e = new Engineer("Rob", 1, "email@email.com", gitHub);
  expect(e.gitHub).toBe(gitHub);
});

// Get Engineer Role
test("Role is Engineer", () => {
  const role = "Engineer";
  const e = new Engineer("Rob", 1, "email@email.com", "GitHubGuy");
  expect(e.getRole()).toBe(role);
});

// Get GitHub username
test("Can get GitHub username", () => {
  const gitHub = "GitHubGuy";
  const e = new Engineer("Rob", 1, "email@email.com", gitHub);
  expect(e.getGitHub()).toBe(gitHub);
});
