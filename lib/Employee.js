class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email; //"email@email.com"
    }
    
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




