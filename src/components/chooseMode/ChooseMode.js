import './ChooseMode.css';
// Redux
import { useDispatch } from 'react-redux';
import { setMode } from '../../redux/reducers/chooseModeSlice';
import { setDisplay } from '../../redux/reducers/appSlice';

export default function ChooseMode(props) {
  const dispatch = useDispatch();

  // Set mode & change display
  const modeHandler = mode => {
    dispatch(setMode(mode));
    dispatch(setDisplay("symbol"));
  }

  return (
    <div id="choose-mode">
      <h1 className="title">Tic-Tac-Toe</h1>
      <div id="mode-wrapper">
        <div>Choose a mode to start</div>
        <div id="mode-btns">
          <button className="mode-btn" onClick={() => modeHandler(1)}>1 Player</button>
          <button className="mode-btn" onClick={() => modeHandler(2)}>2 Players</button>
        </div>
      </div>
    </div>
  );
};