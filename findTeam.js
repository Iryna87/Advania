import findUpdatedSkills from './findSkills.js';

const findNewRanges = (currentTeam) => {
    findUpdatedSkills(currentTeam);
    const averageTime = 15;
    const ranges = currentTeam.map((person) => person.timeRange);
    const sumOfRanges = ranges.reduce((range, acc) => acc + range, 0);
    const skillsBase =  Math.round((averageTime * currentTeam.length / sumOfRanges) * 100) / 100;
    currentTeam.forEach((person) => person.timeRange = Math.round((skillsBase - skillsBase * person.timeRange) * 100) / 100);
    currentTeam.forEach((person) => {
        if (person.timeRange < averageTime * 0.2) return person.timeRange = averageTime * 0.2;
    })
}

const findTeam = (currentTeam) => {
    findNewRanges(currentTeam);
    return currentTeam.sort((a, b) => a.timeRange - b.timeRange);
}

export default findTeam;
