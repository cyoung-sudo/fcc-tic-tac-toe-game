import './App.css';
// Components
import ChooseMode from './components/chooseMode/ChooseMode';
import ChooseSymbol from './components/chooseSymbol/ChooseSymbol';
import GameBoard from './components/gameBoard/GameBoardContainer';
import Footer from './components/footer/Footer';
// Redux
import { useSelector } from 'react-redux';

function App() {
  const display = useSelector((state) => state.app.display);

  return (
    <div id="app">
      {/* Change display according to state */}
      {display === "mode" && <ChooseMode/>}
      {display === "symbol" && <ChooseSymbol/>}
      {display === "game" && <GameBoard/>}
      <Footer/>
    </div>
  );
}

export default App;