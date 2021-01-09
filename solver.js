let hist = [];

const getCol = (n) => board.map((x) => x[n]);

function getSubBlock(a, b) {
  a *= 3;
  b *= 3;

  let newB = [];
  for (let i = a; i < a + 3; i++) {
    for (let j = b; j < b + 3; j++) {
      newB.push(board[i][j]);
    }
  }
  return newB;
}

function isValid(num, i, j) {
  if (board[i].includes(num)) return false;
  if (getCol(j).includes(num)) return false;
  if (getSubBlock(floor(i / 3), floor(j / 3)).includes(num)) return false;
  return true;
}

function solve(board) {
  let t = getEmpty(board);
  if (t == null) {
    return true;
  }

  let i = t[0];
  let j = t[1];

  for (let n = 1; n < 10; n++) {
    if (isValid(n, i, j)) {
      board[i][j] = n;
      hist.push(copyBoard(board));

      if (solve(board)) return true;

      board[i][j] = 0;
    }
  }

  return false;
}

function getEmpty(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] == 0) {
        return [i, j];
      }
    }
  }
  return null;
}

function copyBoard(board) {
  let b2 = [];
  for (let i = 0; i < 9; i++) {
    b2.push([...board[i]]);
  }
  return b2;
}
