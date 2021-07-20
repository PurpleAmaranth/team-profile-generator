// Creates the Intern class with queries
const Employee = require('./Employee');

class Intern extends Employee {
        constructor(name, id, email, school) {
            super(name, id, email);
            this.school = school;
        }

        // Returns the requested Intern object elements
        getSchool() {
            return this.school;
        }

        getRole() {
            return "Intern";
        }
    }

// Exports the Intern class    
module.exports = Intern;