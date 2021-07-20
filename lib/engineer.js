// Creates an Engineer class with queries
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub; 
    }

    // Returns the requested Engineer object elements
    getGitHub() {
        return this.gitHub;
    }

    getRole() {
        return "Engineer";
    }
}

// Exports the Engineer class
module.exports = Engineer;