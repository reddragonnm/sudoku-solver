function getRandBoard() {
  initBoard();

  let br = [];
  let shifts = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  for (let row of shuffle(shifts)) {
    for (let shift of shuffle(row)) {
      br.push(shiftArr([1, 2, 3, 4, 5, 6, 7, 8, 9], shift));
    }
  }

  let num = 81 - floor(random(20, 30));
  while (num != 0) {
    let a = floor(random(9));
    let b = floor(random(9));

    if (br[a][b] != 0) {
      br[a][b] = 0;
      num--;
    }
  }

  board = br;
}

function shiftArr(arr, num) {
  for (let i = 0; i < num % arr.length; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
}
