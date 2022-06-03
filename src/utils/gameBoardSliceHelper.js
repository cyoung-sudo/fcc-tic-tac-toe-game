// Check if board is filled
export const checkFull = board => {
  let filled = true;
  for(let row of board) {
    for(let col of row) {
      if(col === ".") {
        filled = false;
        break;
      }
    }
    if(!filled) break;
  }
  return filled;
};

// Check winning patterns
export const checkWin = board => {
  let win = false;
  let b = board;
  if((b[0][0] !== "." && b[0][0] === b[0][1] && b[0][1] === b[0][2]) ||
    (b[1][0] !== "." && b[1][0] === b[1][1] && b[1][1] === b[1][2]) ||
    (b[2][0] !== "." && b[2][0] === b[2][1] && b[2][1] === b[2][2]) ||
    (b[0][0] !== "." && b[0][0] === b[1][0] && b[1][0] === b[2][0]) ||
    (b[0][1] !== "." && b[0][1] === b[1][1] && b[1][1] === b[2][1]) ||
    (b[0][2] !== "." && b[0][2] === b[1][2] && b[1][2] === b[2][2]) ||
    (b[0][0] !== "." && b[0][0] === b[1][1] && b[1][1] === b[2][2]) ||
    (b[2][0] !== "." && b[2][0] === b[1][1] && b[1][1] === b[0][2])
  ) {
    win = true;
  }
  return win;
};