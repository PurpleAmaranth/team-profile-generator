const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const outputDir = path.resolve(__dirname, 'outut');
const outputPath = path.join(outputDir, "team.html");

const render =require('./src/page-template.js')

const teamMembers = [];
const idArray = [];

function appMenu() {
    function createManager() {
        console.log("Please input team members");
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "Input Team Manager Name:",
                validate: answer => {
                        if (answer !== "") {
                            return true;
                        }
                        return "Please enter a character.";
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
        message: "Which role does this member have?",
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
          return "Please enter a character.";
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
              return "This ID is already taken. Please enter a different number.";
            } else {
              return true;
            }

          }
          return "Please enter a positive number greater than zero.";
        }
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is your engineer's email?",
        validate: answer => {
          const pass = answer.match(
            /\S+@\S+\.\S+/ // Input must match this format string@string.string
          );
          if (pass) {
            return true;
          }
          return "Please enter a valid Email.";
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
          return "Please enter a character.";
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
          return "Please enter a character.";
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
          return "Please enter a valid Email.";
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
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
  }

  createManager();

}

appMenu();

// //Existing team members:
// team.welcome();
// team.generateMemberCard('Geraldine');
// team.generateMemberCard('Wylhelm');
// team.generateMemberCard('Heather');
// team.generateMemberCard('Cuzco');

// //Should not be a member:
// team.generateMemberCard('Anon')

// //Should be added to the team:
// team.addMember('Adriane', 'Boss');

// team.printMembers(); //Should be 5