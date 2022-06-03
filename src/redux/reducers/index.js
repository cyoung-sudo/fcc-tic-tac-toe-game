// Redux
import { combineReducers } from 'redux';
// Slices
import appReducer from './appSlice';
import chooseModeReducer from './chooseModeSlice';
import chooseSymbolReducer from './chooseSymbolSlice';
import gameBoardReducer from './gameBoardSlice';

// Combine slice reducers
export default combineReducers({
  app: appReducer,
  chooseMode: chooseModeReducer,
  chooseSymbol: chooseSymbolReducer,
  gameBoard: gameBoardReducer
});