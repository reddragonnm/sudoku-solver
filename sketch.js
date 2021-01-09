let selectedTile;

let toSolve = false;
let tileSize = 66;

let board;
let invalidKey = false;

function initBoard() {
  board = new Array(9);
  for (let i = 0; i < 9; i++) {
    board[i] = new Array(9);
    for (let j = 0; j < 9; j++) {
      board[i][j] = 0;
    }
  }
}

function resetBoard() {
  initBoard();
  toSolve = false;
  selectedTile = null;
}

function mousePressed() {
  let i = floor(map(mouseX, 0, width, 0, 9));
  let j = floor(map(mouseY, 0, height, 0, 9));

  if (0 <= i && i < 9 && 0 <= j && j < 9) {
    selectedTile = [i, j];
  }
}

function keyPressed() {
  if (selectedTile) {
    if (
      "123456789".includes(key) &&
      isValid(parseInt(key), selectedTile[1], selectedTile[0])
    ) {
      board[selectedTile[1]][selectedTile[0]] = parseInt(key);
    } else {
      invalidKey = true;
    }

    if (key == "Backspace" || key == "Delete")
      board[selectedTile[1]][selectedTile[0]] = 0;
  }
}

function keyReleased() {
  invalidKey = false;
}

function showBoard(board) {
  textSize(50);
  textAlign(CENTER, CENTER);

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      stroke(0);
      fill("yellow");

      if (j % 3 == 0) strokeWeight(4);
      else strokeWeight(1);
      if (j != 0) line(j * tileSize, 0, j * tileSize, height);

      if (i % 3 == 0) strokeWeight(4);
      else strokeWeight(1);
      if (i != 0) line(0, i * tileSize, width, i * tileSize);

      noStroke();
      strokeWeight(1);
      let t = board[i][j];
      if (t != 0)
        text(t, j * tileSize + tileSize / 2, i * tileSize + tileSize / 2);
    }
  }

  if (selectedTile) {
    let i = selectedTile[0];
    let j = selectedTile[1];

    noFill();
    if (!invalidKey) stroke("lightgreen");
    else stroke("red");
    strokeWeight(4);
    rect(i * tileSize, j * tileSize, tileSize, tileSize);
  }
}

function setup() {
  let c = createCanvas(tileSize * 9, tileSize * 9);
  select(".canvas").child(c);
  initBoard();

  textFont("Poppins");
}

function draw() {
  background("plum");

  if (toSolve) {
    solve(board);
    toSolve = false;
  }

  if (hist.length > 0) {
    board = hist.shift();
  }

  showBoard(board);
}
