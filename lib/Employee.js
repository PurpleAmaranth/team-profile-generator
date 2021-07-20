// Creates the Employee class with queries
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email; //"email@email.com"
    }
    
    // Returns the requested Employee object elements
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

// Exports the Employee class
module.exports = Employee;



