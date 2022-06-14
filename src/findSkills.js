const findSkillsByC = (currentTeam) => {
    currentTeam.forEach((person) => {
        if (person.languages.includes('C#')) return;
        if (person.languages.includes(`C++`) && person.languages.includes(`Java`)) {
            return person.timeRange = 0.5;
        }
       if (person.languages.includes(`C++`) || person.languages.includes(`Java`)) {
            return person.timeRange = 0.2;
       }
    })
}

const findSkillsByAge = (currentTeam) => {
    currentTeam.forEach((person) => {
       if (person.age > 45) return;
       if (person.age <= 25) {
            return person.timeRange = person.timeRange + 0.2;
       }
       if (person.age > 25 && person.age <= 45) {
            const newRange = (45 - person.age) * 0.01;
            return person.timeRange = Math.round((person.timeRange + newRange) * 100) / 100;
       }
    })
}

const findSkillsByLng = (currentTeam) => {
    currentTeam.forEach((person) => {
        if (person.languages.length === 0) return;
        const newRange = person.languages.length * 0.08;
        return person.timeRange = Math.round((person.timeRange + newRange) * 100) / 100;
    })
}

const findSkillsByExp = (currentTeam) => {
    currentTeam.forEach((person) => {
       if (person.years === 0 ) return;
       const newRange = person.years * 0.01;
       return person.timeRange = Math.round((person.timeRange + newRange) * 100) / 100;
    })
}

const getUpdatedSkills = (currentTeam) => {
    findSkillsByC(currentTeam);
    findSkillsByAge(currentTeam);
    findSkillsByLng(currentTeam);
    findSkillsByExp(currentTeam);
    currentTeam.forEach((person) => {
        if (!person.languages.includes('C#') && !person.languages.includes('Python')) {
            return person.timeRange = Math.round((person.timeRange / 2) * 100) / 100;
        }
     })

}

export default getUpdatedSkills;
