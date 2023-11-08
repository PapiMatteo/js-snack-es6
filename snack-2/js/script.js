const teams =[
    {
        name: "inter",
        point: 0,
        faul: 0,
    },
    {
        name: "juve",
        point: 0,
        faul: 0,
    },
    {
        name: "napoli",
        point: 0,
        faul: 0,
    },
    {
        name: "milan",
        point: 0,
        faul: 0,
    },
];

// const [team1, team2, team3, team4] = teams;
// const {name, faul} = team1


const newTeamArray = [];

teams.forEach((curTeam, index) => {    
    curTeam.point = generateRndNumber(100);
    curTeam.faul  = generateRndNumber(30); 
    const {name, faul} = curTeam;
    const teamObj = {
        name,
        faul
    };
    newTeamArray.push(teamObj)
})



console.log(newTeamArray);



function generateRndNumber(max) {
    return  result = Math.floor(Math.random() * (max - 0)) + 0;
} ;