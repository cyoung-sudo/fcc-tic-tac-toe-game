// React
import { useEffect } from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux';
// Components
import GameBoard from './GameBoard';
// Actions
import { setCurrentPlyr, placeSymbol, nextGame, resetGame } from '../../redux/reducers/gameBoardSlice';
import { setDisplay } from '../../redux/reducers/appSlice';
// Helpers
import { timeout, compStrat } from '../../utils/GameBoardContainerHelper';

export default function GameBoardContainer(props) {
  const { board, score, currentPlyr, gameOver } = useSelector((state) => state.gameBoard);
  const { mode } = useSelector((state) => state.chooseMode);
  const { symbol } = useSelector((state) => state.chooseSymbol);
  const dispatch = useDispatch();

  // Trigger on component mount
  useEffect(() => {
    // Pick which player goes first
    dispatch(setCurrentPlyr(symbol));
  }, []);

  // Trigger on turn change
  useEffect(() => {
    // Style current player
    if(currentPlyr.player === 1) {
      document.getElementById("game-score1").classList.add("current");
      document.getElementById("game-score2").classList.remove("current");
    } else {
      document.getElementById("game-score2").classList.add("current");
      document.getElementById("game-score1").classList.remove("current");
    }
    // Check for computer's turn
    if(mode === 1) {
      if((currentPlyr.player === 2) && (gameOver === "")) {
        cpuMove();
      }
    }
  }, [currentPlyr]);

  // Trigger on score change
  useEffect(() => {
    // Style winning player
    if(score.player1 > score.player2) {
      document.getElementById("game-score1").classList.add("winning");
      document.getElementById("game-score2").classList.remove("winning");
    } else if(score.player2 > score.player1) {
      document.getElementById("game-score2").classList.add("winning");
      document.getElementById("game-score1").classList.remove("winning");
    } else {
      document.getElementById("game-score2").classList.remove("winning");
      document.getElementById("game-score1").classList.remove("winning");
    }
  }, [score])

  // Trigger on gameover
  useEffect(() => {
    if(gameOver !== "") {
      if(gameOver === "win") {
        if(mode === 1 && currentPlyr.player === 2) {
          // Play lose audio
          audioL.play();
        } else {
          // Play win audio
          audioW.play();
        }
      } else {
        // Play draw audio
        audioD.play();
      }
      startNextGame();
    }
  }, [gameOver])

  // Game audios
  const audioW = new Audio("https://sampleswap.org/samples-ghost/MELODIC%20SAMPLES/SAMPLED%20MUSIC/92[kb]ballgame_start.wav.mp3");
  const audioD = new Audio("https://sampleswap.org/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/Cheesy%20Lo-Fi%20Sound%20Effects/37[kb]Buzzer.wav.mp3");
  const audioL = new Audio("https://sampleswap.org/samples-ghost/MELODIC%20SAMPLES/SAMPLED%20MUSIC/50[kb]whistle1.wav.mp3");

  // Handle player moves
  const moveHandler = (coord) => {
    if(gameOver === "") {
      if(mode === 1) {
        //--- Single player
        // Check if player's turn & valid cell
        if((currentPlyr.player === 1) && (board[coord[0]][coord[1]] === ".")) {
          dispatch(placeSymbol(coord));
        }
      } else {
        //--- 2 player
        // Check valid cell
        if(board[coord[0]][coord[1]] === ".") {
          dispatch(placeSymbol(coord));
        }
      }
    }
  };

  // Handle computer moves
  const cpuMove = async () => {
    console.log("CPU thinking...");
    await timeout(1000);
    let coord = compStrat(board, currentPlyr.symbol);
    dispatch(placeSymbol(coord));
  };

  // Start next game
  const startNextGame = async () => {
    await timeout(5000);
    dispatch(nextGame());
    // Set first player
    dispatch(setCurrentPlyr(symbol));
  }

  // Reset game & display home screen
  const homeScreen = () => {
    dispatch(resetGame());
    dispatch(setDisplay("mode"));
  }

  return (
    <GameBoard
      moveHandler={moveHandler}
      homeScreen={homeScreen}/>
  );
};