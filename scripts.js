const Board = (() => {
  const board = ["", "", "", "", "", "", "", "", ""];
  const drawBoard = () => {
    const display = document.querySelector("#display");
    for (let i = 0; i < 9; i++) {
      const square = document.createElement("div");
      square.classList.add("square", `square-${i + 1}`);
      square.setAttribute("is-clickable", true);
      square.addEventListener("click", () => {
        if (square.hasAttribute("is-clickable")) {
          square.removeAttribute("is-clickable");
          if (Game.isXTurn) {
            square.textContent = "X";
            Game.isXTurn = false;
          } else {
            square.textContent = "O";
            Game.isXTurn = true;
          }
        }
      });
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

const Game = (() => {
  const resetGame = document.querySelector("#reset-game-btn");
  resetGame.addEventListener("click", Board.drawBoard);

  const resetPlayers = () => {
    const p1Name = prompt("What's Player One's name?");
    const p1Catchphrase = prompt("What's Player One's catchphrase?");
    const p2Name = prompt("What's Player Two's name?");
    const p2Catchphrase = prompt("What's Player Two's catchphrase?");

    const playerOne = Player(p1Name, p1Catchphrase);
    const playerTwo = Player(p2Name, p2Catchphrase);

    const newP1 = document.querySelector("#player-one");
    const newP2 = document.querySelector("#player-two");

    newP1.textContent = playerOne.name;
    newP2.textContent = playerTwo.name;

    return { playerOne, playerTwo };
  };

  const resetPlayersBtn = document.querySelector("#reset-players-btn");
  resetPlayersBtn.addEventListener("click", resetPlayers);

  let isXTurn = true;

  return { resetPlayers, isXTurn };
})();
