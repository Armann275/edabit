function champions(teams) {
    for(let el of teams){
        el['points'] = 3 * el.wins + 1 * el.draws; 
        el['goalDiff'] = el.scored - el.conceded;
    }
    let max = teams[0];
    for(let i in teams){
        if (teams[i].points > max.points) {
            max = teams[i];
        }else if (teams[i].points == max.points) {
            if (teams[i].goalDiff > max.goalDiff) {
                max = teams[i];
            }
        }
    }
    return max.name;
}

let res = champions([
    {
      name: "Manchester United",
      wins: 20,
      loss: 3,
      draws: 5,
      scored: 88,
      conceded: 20,
    },
    {
      name: "Arsenal",
      wins: 24,
      loss: 6,
      draws: 8,
      scored: 98,
      conceded: 29,
    },
    {
      name: "Chelsea",
      wins: 24,
      loss: 6,
      draws: 8,
      scored: 99,
      conceded: 29,
    },
]);
console.log(res);

