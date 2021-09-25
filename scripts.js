const Game = (() => {
  const board = ["", "", "", "", "", "", "", "", ""];
  const drawBoard = () => {
    const display = document.querySelector("#display");
    for (let i = 0; i < 9; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
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
  return { score, announce, taunt };
};

const Controller = (() => {
  const addX = () => {};
  const addO = () => {};
  return { addX, addO };
})();
