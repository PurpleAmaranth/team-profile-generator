class Member {
    constructor (name, boolean1, boolean2, employeeID, officeNumber, email, github) {
        this.name = name;
        this.member = boolean1;
        this.type = [engineer, intern, manager]; //TD Subclasses
        this.manager = boolean2;
        this.employeeID = employeeID;
        this.officeNumber = officeNumber;
        this.email = email; //"email@email.com"
        this.github = github; //"https://github.com/GitHubAddy"
    }
}

