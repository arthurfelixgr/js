const team = {
  _players: [
    {
      firstName: "Robson",
      lastName: "de Souza",
      age: 36
    },
    {
      firstName: "Ricardo",
      lastName: "Leite",
      age: 38
    },
    {
      firstName: "Ronaldo",
      lastName: "Moreira",
      age: 40
    },
  ],
  _games: [
    {
      opponent: "Alemanha",
      teamPoints: 2,
      opponentPoints: 0
    },
    {
      opponent: "França",
      teamPoints: 0,
      opponentPoints: 1
    },
    {
      opponent: "Italia",
      teamPoints: 0,
      opponentPoints: 0
    },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    this._players.push(
      {
        firstName,
        lastName,
        age
      }
    )
  },
  addGame(opponent, teamPoints, opponentPoints) {
    this._games.push(
      {
        opponent,
        teamPoints,
        opponentPoints
      }
    )
  },
};
team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);
team.addGame("Argentina", 3, 0);
team.addGame("Paraguai", 7, 0);
team.addGame("Korea", 5, 3);
console.log(team.players);
console.log(team.games);
