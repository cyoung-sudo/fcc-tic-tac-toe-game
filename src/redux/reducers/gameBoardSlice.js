import { createSlice } from '@reduxjs/toolkit';
// Helpers
import { checkWin, checkFull } from '../../utils/gameBoardSliceHelper';

export const gameBoardSlice = createSlice({
  name: 'gameBoard',
  initialState: {
    board: [[".", ".", "."], [".", ".", "."], [".", ".", "."]],
    score: {
      player1: 0,
      player2: 0
    },
    currentPlyr: {
      player: 0,
      symbol: ""
    },
    gameOver: ""
  },
  reducers: {
    //----- Randomly pick which player goes first
    setCurrentPlyr: (state, action) => {
      let player1Symbol = action.payload;
      let otherSymbol = (player1Symbol === "X" ? "O" : "X");
      let min = 1;
      let max = 2;
      let firstPlayer = Math.floor(Math.random() * (max - min + 1) + min);
      if(firstPlayer === 1) {
        //--- Player1 goes first
        state.currentPlyr.player = 1;
        state.currentPlyr.symbol = player1Symbol;
        console.log(">>> Player 1 goes first");
      } else {
        //--- Player2/CPU goes first
        state.currentPlyr.player = 2;
        state.currentPlyr.symbol = otherSymbol;
        console.log(">>> Player 1 goes second");
      }
    },
    //----- Place symbol, check gameover conditions, set next player
    placeSymbol: (state, action) => {
      let coord = action.payload;
      let boardCopy = [...state.board];
      boardCopy[coord[0]][coord[1]] = state.currentPlyr.symbol;
      state.board = [...boardCopy];
      console.log(`Symbol placed: ${state.board}`);
      // Check gameover conditions
      if(checkWin(state.board)) {
        //--- Current player wins
        state.gameOver = "win";
        // Update score
        if(state.currentPlyr.player === 1) {
          state.score.player1 = state.score.player1 + 1;
        } else {
          state.score.player2 = state.score.player2 + 1;
        }
        console.log(">>> Current player wins <<<");
      } else if(checkFull(state.board)) {
        //--- Draw
        state.gameOver = "draw";
        console.log(">>> Draw... <<<");
      } else {
        //--- Next player
        let currentSymbl = state.currentPlyr.symbol;
        let nextSymbol = state.currentPlyr.symbol = (currentSymbl === "X" ? "O" : "X");
        if(state.currentPlyr.player === 1) {
          // Switch tp Player2
          state.currentPlyr = {
            player: 2,
            symbol: nextSymbol
          };
          console.log(">>> Player2/CPU turn");
        } else {
          // Switch to Player1
          state.currentPlyr = {
            player: 1,
            symbol: nextSymbol
          };
          console.log(">>> Player1 turn");
        }
      }
    },
    //----- Start next game with score saved
    nextGame: (state) => {
      state.board = [[".", ".", "."], [".", ".", "."], [".", ".", "."]];
      state.currentPlyr = {
        player: 0,
        symbol: ""
      };
      state.gameOver = "";
      console.log("Next game");
    },
    //----- Reset game state
    resetGame: (state) => {
      state.board = [[".", ".", "."], [".", ".", "."], [".", ".", "."]];
      state.score = {
        player1: 0,
        player2: 0
      };
      state.currentPlyr = {
        player: 0,
        symbol: ""
      };
      state.gameOver = "";
      console.log("Game state reseted");
    }
  }
});

// Action creators are generated for each case reducer function
export const { setCurrentPlyr, placeSymbol, nextGame, resetGame } = gameBoardSlice.actions;

export default gameBoardSlice.reducer;