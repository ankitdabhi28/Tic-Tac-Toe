import { Provider } from "react-redux";
import "./App.css";
import Game from "./Components/Game";
import CalculateWinner from "./Components/CalculateWinner";
import { store } from "./Components/Redux/store"

function App() {
  return (
    <div className="card col-8 app-com">
      <div className="row lets justify-content-center">Let's Play Tic - Tac - Toe</div>
      <div >
      <Provider store={store}>
        <CalculateWinner />
        <Game />
      </Provider>
    </div></div>
  );
}

export default App;
