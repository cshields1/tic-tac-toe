const Game = (() => {
  const board = ["", "", "", "", "", "", "", "", ""];
  const drawBoard = () => {
    const display = document.querySelector("#display");
    for (let i = 0; i < 9; i++) {
      const square = document.createElement("div");
      square.classList.add("square", `square-${i + 1}`);
      square.addEventListener("click", () => {});
      square.textContent = board[i];
      display.append(square);
    }
  };

  return { board, drawBoard };
})();

const Player = (name, catchphrase) => {
  let wins = 0;
  let losses = 0;
  const score = wins - losses;
  const winRound = () => {
    wins++;
  };
  const loseRound = () => {
    losses++;
  };

  const announce = () => `Introducing...${name.toUpperCase()}!!!`;
  const taunt = () => `Oh yeah...${catchphrase}!`;

  return { name, score, winRound, loseRound, announce, taunt };
};

const Controller = (() => {
  const resetPlayers = document.querySelector("#reset-players-btn");
  resetPlayers.addEventListener("click", () => {
    const p1Name = prompt("What's your name?");
    const p1Catchphrase = prompt("What's your catchphrase?");
    const p2Name = prompt("What's your name?");
    const p2Catchphrase = prompt("What's your catchphrase?");

    const newP1 = Player(p1Name, p1Catchphrase);
    const newP2 = Player(p2Name, p2Catchphrase);

    const playerOne = document.querySelector("#player-one");
    const playerTwo = document.querySelector("#player-two");

    playerOne.textContent = newP1.name;
    playerTwo.textContent = newP2.name;
  });

  const addX = () => {};
  const addO = () => {};
  return { addX, addO };
})();

// click button to add player
// input name and catchphrase
// save to player one and update display
