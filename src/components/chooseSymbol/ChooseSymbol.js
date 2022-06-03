import './ChooseSymbol.css';
// Redux
import { useDispatch } from 'react-redux';
import { setSymbol } from '../../redux/reducers/chooseSymbolSlice';
import { setDisplay } from '../../redux/reducers/appSlice';
// Icons
import { IoMdArrowRoundBack } from 'react-icons/io';

export default function ChooseSymbol(props) {
  const dispatch = useDispatch();

  // Set symbol & change display
  const symbolHandler = symbol => {
    dispatch(setSymbol(symbol));
    dispatch(setDisplay("game"));
  }

  // Go back to "mode" display
  const homeScreen = () => {
    dispatch(setDisplay("mode"));
  }

  return (
    <div id="choose-symbol">
      <h1 className="title">Tic-Tac-Toe</h1>
      <div id="symbol-wrapper">
        <div>Choose a symbol</div>
        <div id="symbol-btns">
          <button className="symbol-btn" onClick={() => symbolHandler("X")}>X</button>
          <button className="symbol-btn" onClick={() => symbolHandler("O")}>O</button>
        </div>
      </div>
      <button id="back-btn" onClick={() => homeScreen()}>
        <span><IoMdArrowRoundBack/></span> Back
      </button>
    </div>
  );
};