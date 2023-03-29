import { Provider } from "react-redux";
import "./App.css";
import Game from "./Components/Game";
import Board from "./Components/Board";
// import Board22 from "./Components/Board22";
import CalculateWinner from "./Components/CalculateWinner";
import { store } from "./Components/Redux/store"

function App() {
  return (
    <div>
      <Provider store={store}>
        <Board />
        <CalculateWinner />




        <br /><br />
        <Game />
      </Provider>
    </div>
  );
}

export default App;
