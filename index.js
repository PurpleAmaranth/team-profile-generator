const Team = require('./team');
const { members } = require('./member');

const team = new Team("Software Engineering Team", members);

//Existing team members:
team.welcome();
team.generateMemberCard('Geraldine');
team.generateMemberCard('Wylhelm');
team.generateMemberCard('Heather');
team.generateMemberCard('Cuzco');

//Should not be a member:
team.generateMemberCard('Anon')

//Should be added to the team:
team.addMember('Adriane', 'Boss');

team.printMembers(); //Should be 5