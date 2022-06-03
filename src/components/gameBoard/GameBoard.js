import './GameBoard.css';
// Redux
import { useSelector } from 'react-redux';
// Icons
import { IoMdArrowRoundBack } from 'react-icons/io';

export default function GameBoard(props) {
  const { board, score } = useSelector((state) => state.gameBoard);
  const { mode } = useSelector((state) => state.chooseMode);

  return (
    <div id="game-board">
      <div id="game-info">
        <div id="game-mode">{mode === 1 ? "Single-Player" : "Two-Player"}</div>
        <span id="game-score1">Player1: {score.player1}</span>
        <span id="game-score2">{mode === 1 ? "CPU:" : "Player2:"} {score.player2}</span>
      </div>
      <table id="board">
        <tbody>
          <tr>
            <td onClick={() => props.moveHandler([0,0])} className="board-cell">
              {board[0][0] !== "." && board[0][0]}
            </td>
            <td onClick={() => props.moveHandler([0,1])} className="board-cell vert">
              {board[0][1] !== "." && board[0][1]}
            </td>
            <td onClick={() => props.moveHandler([0,2])} className="board-cell">
              {board[0][2] !== "." && board[0][2]}
            </td>
          </tr>
          <tr>
            <td onClick={() => props.moveHandler([1,0])} className="board-cell hori">
              {board[1][0] !== "." && board[1][0]}
            </td>
            <td onClick={() => props.moveHandler([1,1])} className="board-cell hori vert">
              {board[1][1] !== "." && board[1][1]}
            </td>
            <td onClick={() => props.moveHandler([1,2])} className="board-cell hori">
              {board[1][2] !== "." && board[1][2]}
            </td>
          </tr>
          <tr>
            <td onClick={() => props.moveHandler([2,0])} className="board-cell">
              {board[2][0] !== "." && board[2][0]}
            </td>
            <td onClick={() => props.moveHandler([2,1])} className="board-cell vert">
              {board[2][1] !== "." && board[2][1]}
            </td>
            <td onClick={() => props.moveHandler([2,2])} className="board-cell">
              {board[2][2] !== "." && board[2][2]}
            </td>
          </tr>
        </tbody>
      </table>
      <div id="game-options">
        <button onClick={() => props.homeScreen()}>
          <span><IoMdArrowRoundBack/></span> Home
        </button>
      </div>
    </div>
  );
};