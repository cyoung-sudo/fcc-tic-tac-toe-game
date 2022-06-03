// Set delays
export const timeout = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// Computer placement strategy
export const compStrat = (board, symbol) => {
  let coord;
  let stratPlacement = false;
  let emptyCells = [];
  for(let i=0; i<3; i++) {
    for(let j=0; j<3; j++) {
      // Check for empty cell
      if(board[i][j] === ".") {
        emptyCells.push([i,j]);
        // Check horizontal win placement
        if(board[i][(j+1)%3] === symbol &&
          board[i][(j+2)%3] === symbol) {
          coord = emptyCells[emptyCells.length-1];
          stratPlacement = true;
          break;
        // Check vertical win placement
        } else if(board[(i+1)%3][j] === symbol &&
        board[(i+2)%3][j] === symbol) {
          coord = emptyCells[emptyCells.length-1];
          stratPlacement = true;
          break;
        // Check diagonal win placements
        } else {
          // Top-left to bottom-right
          if((i === 0 && j === 0) || (i === 2 && j === 2)) {
            if(board[(i+1)%3][(j+1)%3] === symbol && 
            board[(i+2)%3][(j+2)%3] === symbol) {
              coord = emptyCells[emptyCells.length-1];
              stratPlacement = true;
              break;
            }
          // Bottom-left to top-right
          } else if((i === 2 && j === 0) || (i === 0 && j === 2)) {
            if(board[(i+1)%3][(j-1)%3] === symbol && 
            board[(i+2)%3][(j-2)%3] === symbol) {
              coord = emptyCells[emptyCells.length-1];
              stratPlacement = true;
              break;
            }
          // Center
          } else if(i === 1 && j === 1) {
            if((board[(i+1)%3][(j+1)%3] === symbol && 
            board[(i+2)%3][(j+2)%3] === symbol) ||
            (board[(i+1)%3][(j-1)%3] === symbol && 
            board[(i+2)%3][(j-2)%3] === symbol)) {
              coord = emptyCells[emptyCells.length-1];
              stratPlacement = true;
              break;
            }
          }
        }
      }
    }
    if(stratPlacement) break;
  }
  // Check for no strategic placement
  if(!stratPlacement) {
    // Place in center if possible
    if(board[1][1] === ".") {
      console.log("Center placement")
      coord = [1,1];
    // Random placement
    } else {
      console.log("Random placement")
      let min = 0;
      let max = emptyCells.length - 1;
      let rand = Math.floor(Math.random() * (max - min + 1) + min);
      coord = emptyCells[rand];
    }
  } else {
    console.log("Strategic placement")
  }
  return coord;
};