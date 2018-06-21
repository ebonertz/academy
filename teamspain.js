const team = {
  _players: [
    { firstName: "Andres",
     lastName:"Iniesta",
     age: 34 },
    { firsName: "Jordi",
     lastName: "Alba",
     age: 29 },
    { firstName: "Gerard",
     	lastName: "Pique",
     	age: 31
    }
  ],
  _games: [
    {opponent:"Portugal",
    teamPoints:3,
    opponentPoints:3},
    {opponent: "Iran",
    teamPoints: 3,
    opponentPoints:1},
    {opponent: "Morocco",
    teamPoints: 2,
    opponentPoints: 0}
  ],
  get players() {
    	return this._players;
  },
  get games() {
    	return this._games;
  },
  addPlayer(firstName, lastName, age){
  let player = {
    firstName: firstName,
    lastName: lastName,
    age: age
  };
  	this.players.push(player);
	},
  addGame(opponent, teamPoints, opponentPoints){
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    this.games.push(game);
  }
};
team.addPlayer("Sergio", "Ramos", 32);
team.addGame("Brazil", 3, 2)
console.log(team._players);
console.log(team._games);
