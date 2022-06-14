import currentTeam from './currentTeam.js';
import findTeam from './findTeam.js'

class Team {
  constructor(currentTeam) {
    this.currentTeam = currentTeam;
  }

  getCurrentTeamWithRanges() {
    return Object.assign({}, findTeam(Object.values(this.currentTeam)));
  }

  getNewTeam() {
    const persons = findTeam(Object.values(this.currentTeam));
    return Object.assign({}, persons.slice(0, 3));
  }

  getTimeToStart() {
    return (Object.values(this.getNewTeam()).sort((a, b) => a - b)).slice( -1)[0].timeRange;
  }

  getNewMembersOrder() {
    return Object.assign({}, findTeam(Object.values(this.currentTeam)).slice(3));
  }
}

const newTeam = new Team(currentTeam);
console.log(newTeam.getNewMembersOrder());
