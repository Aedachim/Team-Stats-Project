const teamBayern = {
    //creating profile
    _players: [
      {
      firstName: 'Cristiano',
      lastName: 'Ronaldo',
      age: 30,
      firstName: 'Zinedine',
      lastName: 'Zidane',
      age: 38,
      firstName: 'Shrodan',
      lastName: 'Mustafi',
      age: 27,
      }
    ],
    //creating teams
    _games: [
      {
        opponent: 'Leverkusen',
        teamPoints: 4,
        opponentPoints: 2,
        opponent: 'Real Madrid',
        teamPoints: 2,
        opponentPoints: 2,
        opponent: 'Beshiktas',
        teamPoints: 3,
        opponentPoints: 4,
      }
    ],
  /* using getter method(), (for changing, defining, accessing etc.) */
    get players () {
      return this._players;
    },
    get games () {
      return this._games;
    },
  // adding more player to the team(creating)
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age,
      };
      //adding to the player object
      this.players.push(player);
    },
  // adding more games to the team(creating)
    addGame(opponent, teamPoints, opponentPoints) {
      let game = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints,
      };
      // adding to the game object
      this.games.push(game);
    },
  /* Loop function calc about the win, lose and ties */
    calcWinAndLose () {
      let wins = 0;
      let loses = 0;
      let ties = 0;
      
      for (let i = 0; i < teamBayern._games.length; i += 1) {
        console.log(teamBayern._games[i].opponent);
        if (teamBayern._games[i].teamPoints > teamBayern._games[i].opponentPoints) {
          console.log('You won!');
          console.log('');
          wins += 1;
        } else if (teamBayern._games[i].teamPoints < teamBayern._games[i].opponentPoints) {
          console.log('You lost!');
          console.log('');
          loses += 1;
        } else {
          console.log('You both tied!');
          console.log('');
          ties += 1;
        }
      }
      console.log(`Wins: ${wins}`);
      console.log(`Loses: ${loses}`);
      console.log(`Ties: ${ties}`);
      console.log('');
    }
  };  
  // Loop function for the Profile
     function consolePlayers() {
       for (let i = 0; i < teamBayern._players.length; i += 1) {
         console.log(`Player ${i + 1}`);
         console.log(`First Name: ${teamBayern._players[i].firstName}`);
         console.log(`Last Name: ${teamBayern._players[i].lastName}`);
         console.log(`Age: ${teamBayern._players[i].age}`);
         console.log('');
       }
     };
  
  
  // Defining the player
    teamBayern.addPlayer('Steph', 'Curry', 28);
    teamBayern.addPlayer('Lisa', 'Leslie', 44);
    teamBayern.addPlayer('Bugs', 'Bunny', 76);
  // Defining the teams  
    teamBayern.addGame('Juventus', 5, 3);
    teamBayern.addGame('Paris st.', 2, 2);
    teamBayern.addGame('Mexico city', 4, 3);
  /* log to the console, Profile, Teams, Wins,Loses and Ties, and last but not least the profile of the players */
    console.log(teamBayern.players);
    console.log(teamBayern.games);
    console.log(teamBayern.calcWinAndLose());
    console.log(consolePlayers());
  
  