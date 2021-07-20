// Creates the Manager class with queries
const Employee = require('./Employee');

class Manager extends Employee {
        constructor(name, id, email, officeNumber) {
                super(name, id, email);
                this.officeNumber = officeNumber;
        }

        // Returns the requested Manager object elements
        getOfficeNumber() {
                return this.officeNumber;
        }

        getRole() {
                return "Manager";
        }
    }

// Exports the Manager class 
module.exports = Manager;
