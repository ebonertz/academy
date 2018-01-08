players = [
  "udo",
  "art",
  "rachel",
  "evan",
  "lucho",
  "bill",
  "jackie",
  "rob"
]
class Match {
  constructor() {
    this.players = []
  }
  toString() {
    return this.players.join(" vs. ");
  }
  addPlayer(player) {
    this.players.push(player)
  }
  isFull() {
    return this.players.length === 2
  }
}
tourney = new Array(new Match())
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
while (players.length > 0) {
  const num = getRandomArbitrary(0, players.length);
  player = players.splice(num, 1)[0];
  lastMatch = tourney[tourney.length - 1]
  if (!lastMatch.isFull()) {
    lastMatch.addPlayer(player)
  } else {
    match = new Match()
    match.addPlayer(player)
    tourney.push(match)
  }
}
tourney.forEach((p, i) => {
  console.log(`Game ${i + 1} is: ${p}`)
})
