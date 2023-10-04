const EMPTY = 0;
const DARK = 1;
const LIGHT = 2;

const INITIAL_BOARD = [
  [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
  [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
  [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
  [EMPTY, EMPTY, EMPTY, DARK, LIGHT, EMPTY, EMPTY, EMPTY],
  [EMPTY, EMPTY, EMPTY, LIGHT, DARK, EMPTY, EMPTY, EMPTY],
  [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
  [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
  [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
];

const boardElement = document.getElementById('board');

async function showBoard() {
  while (boardElement.firstChild) {
    boardElement.removeChild(boardElement.firstChild);
  }

  INITIAL_BOARD.forEach((line) => {
    line.forEach((square) => {
      //8×8のマス
      const squareElement = document.createElement('div');
      squareElement.className = 'square';

      if (square !== EMPTY) {
        //黒い石
        const stoneElement = document.createElement('div');
        const color = square === DARK ? 'dark' : 'light';
        stoneElement.className = `stone ${color}`;

        squareElement.appendChild(stoneElement);
      }
      boardElement.appendChild(squareElement);
    });
  });
}

async function main() {
  await showBoard();
}

main();
