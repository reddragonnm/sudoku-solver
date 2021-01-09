function getRandBoard() {
  initBoard();

  let br = [];
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < 9; i++) {
    br.push(shiftArr([...arr], i));
  }

  shuffle(br, true);
  board = br;

  console.log(copyBoard(br));

  let num = 81 - 20;
  while (num != 0) {
    let a = floor(random(9));
    let b = floor(random(9));

    if (board[a][b] != 0) {
      board[a][b] = 0;
      num--;
    }
  }

  board = br;
}

function shiftArr(arr, num) {
  for (let i = 0; i < num; i++) {
    arr.unshift(arr.pop());
  }

  return arr;
}
