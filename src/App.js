import { Provider } from "react-redux";
import "./App.css";
import Game from "./Components/Game";
import BoardOK from "./Components/BoardOK";
// import Board22 from "./Components/Board22";
import CalculateWinner from "./Components/CalculateWinner";
import { store } from "./Components/Redux/store"

function App() {
  return (
    <div>
      <Provider store={store}>
        <BoardOK />
        <CalculateWinner />




        <br /><br />
        <Game />
      </Provider>
    </div>
  );
}

export default App;
