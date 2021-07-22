// Define requirements and variables
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const outputDir = path.resolve(__dirname, 'output');
const outputPath = path.join(outputDir, "team.html");
const render =require('./src/page-template.js')
const teamMembers = [];
const idArray = [];

// Create functions to get user input
function teamInputMenu() {
    // Main input menu
    function createManager() {
        // Gets Manager input to create manager
        
        console.log("Please input team members:");
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "Input Team Manager Name:",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a name.";
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "Input Manager ID:",
                validate: answer => {
                    const pass = answer.match(
                        /^1-9\d*$/ // Characters must be a decimal between 1 and 9.
                    );
                    if (pass) {
                        return true;
                    }
                    return "Please enter a number greater than zero.";
                }
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamMembers.push(manager);
            idArray.push(answers.managerId);
            createTeam();
        });
    }

    function createTeam() {
        inquirer.prompt([
            {
                type: "list",
                name: "memberChoice",
                message: "Input Member Role:",
                choices: [
                "Engineer",
                "Intern",
                "Quit"
                ]
            }
        ]).then(userChoice => {
        switch (userChoice.memberChoice) {
            case "Engineer":
            addEngineer();
            break;
            case "Intern":
            addIntern();
            break;
            default:
            buildTeam();
        }
        });
    }

  function addEngineer() {
    inquirer.prompt([
      {
        type: "input",
        name: "engineerName",
        message: "Input Engineer Name:",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter a name.";
        }
      },
      {
        type: "input",
        name: "engineerId",
        message: "Input Engineer ID:",
        validate: answer => {
          const pass = answer.match(
            /^[1-9]\d*$/
          );
          if (pass) {
            if (idArray.includes(answer)) {
              return "ID in use. Enter a new number.";
            } else {
              return true;
            }

          }
          return "Please enter a number greater than zero.";
        }
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "Input Engineer Email:",
        validate: answer => {
          const pass = answer.match(
            /\S+@\S+\.\S+/ // Input must match this format string@string.string
          );
          if (pass) {
            return true;
          }
          return "Please enter an email.";
        }
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "Input GitHub username:",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter a username.";
        }
      }
    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamMembers.push(engineer);
      idArray.push(answers.engineerId);
      createTeam();
    });
  }

  function addIntern() {
    inquirer.prompt([
      {
        type: "input",
        name: "internName",
        message: "Input Intern Name:",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter a name.";
        }
      },
      {
        type: "input",
        name: "internId",
        message: "Input Intern ID:",
        validate: answer => {
          const pass = answer.match(
            /^[1-9]\d*$/
          );
          if (pass) {
            if (idArray.includes(answer)) {
              return "ID in use. Enter a new number.";
            } else {
              return true;
            }

          }
          return "Please enter a number greater than zero.";
        }
      },
      {
        type: "input",
        name: "internEmail",
        message: "Input Intern Email:",
        validate: answer => {
          const pass = answer.match(
            /\S+@\S+\.\S+/
          );
          if (pass) {
            return true;
          }
          return "Please enter an email.";
        }
      },
      {
        type: "input",
        name: "internSchool",
        message: "Input Intern School",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter a school name.";
        }
      }
    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamMembers.push(intern);
      idArray.push(answers.internId);
      createTeam();
    });
  }

  function buildTeam() {
    // Create the output directory if the output path doesn't exist
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir)
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
  }

  createManager();

}

teamInputMenu();

