const Board = (() => {
  const board = [[], [], []];
  const display = document.querySelector("#display");
  const drawBoard = () => {
    for (let i = 0; i < 9; i++) {
      const square = document.createElement("div");
      square.classList.add("square", `square-${i + 1}`);
      square.setAttribute("is-clickable", true);
      square.addEventListener("click", () => {
        square.removeAttribute("is-clickable");
        if (Game.isXTurn) {
          square.textContent = "X";
          board[i] = "X";
          Game.isXTurn = false;
        } else {
          square.textContent = "O";
          board[i] = "O";
          Game.isXTurn = true;
        }
        Game.checkGameStatus();
      });
      display.append(square);
    }
  };

  return { display, board, drawBoard };
})();

Board.drawBoard();

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

  let isGameOver = false;

  const checkGameStatus = () => {
    const squares = Board.board;

    const rows = [
      [squares[0], squares[1], squares[2]],
      [squares[3], squares[4], squares[5]],
      [squares[6], squares[7], squares[8]],
    ];
    const columns = [
      [squares[0], squares[3], squares[6]],
      [squares[1], squares[4], squares[7]],
      [squares[2], squares[5], squares[8]],
    ];
    const diagonals = [
      [squares[0], squares[4], squares[8]],
      [squares[2], squares[4], squares[6]],
    ];

    for (let row of rows) {
      if (
        row.every((square) => square === "X") ||
        row.every((square) => square === "O")
      ) {
        isGameOver = true;
        alert("GAME OVER!");
      }
    }
    for (let column of columns) {
      if (
        column.every((square) => square === "X") ||
        column.every((square) => square === "O")
      ) {
        isGameOver = true;
        alert("GAME OVER!");
      }
    }
    for (let diagonal of diagonals) {
      if (
        diagonal.every((square) => square === "X") ||
        diagonal.every((square) => square === "O")
      ) {
        isGameOver = true;
        alert("GAME OVER!");
      }
    }
  };

  return { resetPlayers, isXTurn, checkGameStatus };
})();
