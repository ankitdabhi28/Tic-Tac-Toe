import React from "react";
// import Square from "./Square";
import { useSelector } from "react-redux";
import Board from "./Board";
import { getCurrentMove } from "./Redux/ForState/CurrentMove";
import { getHistory } from "./Redux/ForState/History";
// import calculateWinner from "./CalculateWinner";
import { getXisNext } from "./Redux/ForState/setXIsNext";
// import { getSquare } from "./Redux/ForState/Squares";
import { dispatch } from "./Redux/store";
// import { getInputState } from "./Redux/ForState/InputState";
// import { dispatch } from "./Redux/store";

function Game() {
  const next = useSelector((state) => state.XisNext.XisNext);
  console.log(next, "aaa");

  // redux are created
  // const [xIsNext, setXIsNext] = useState(true);
  //   const [currentMove, setCurrentMove] = useState(0);
  const MyMove = useSelector((state) => state.CurrentMove.CurrentMove);
  const MyHistory = useSelector((state) => state.History.History);
  //   const [history, setHistory] = useState([Array(9).fill(null)]);

  const currentSquares = MyHistory[MyMove];
  console.log(currentSquares, "logs ");

  const handlePlay = (nextSquares) => {
    const nextHistory = [...MyHistory.slice(0, MyMove + 1), nextSquares];

    dispatch(getHistory(nextHistory));

    // setHistory(nextHistory);
    // setCurrentMove(nextHistory.length - 1);
    dispatch(getCurrentMove(nextHistory.length - 1));

    dispatch(getXisNext(!next));
  };

  const moves = MyHistory.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button  onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  const jumpTo = (nextMove) => {
    dispatch(getCurrentMove(nextMove));
    // setCurrentMove(nextMove);

    dispatch(getXisNext(!nextMove % 2 === 0));
    // todo
  };

  console.log(MyHistory, "MyHistory");
  return (
    <div className="container ">
      <div className="row justify-content-center">
      <div className="game-sec"></div>
      <div className="col-8 col-lg-5 col-md-9 ">
        <Board next={next} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <br />

      <div className="card col-lg-5 col-8  moves-data">
        <div className="row  col-md-12 col-lg-4 col-12  ">
          <button
            onClick={() => {
              dispatch(getCurrentMove(0));
            }}
          >
            Play Again
          </button>
        </div>
        {/* <div>{play}</div> */}
        <br />
        <div className="row col-11">
          <ol>{moves}</ol>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Game;
