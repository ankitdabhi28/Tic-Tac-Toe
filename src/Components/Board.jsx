import React from "react";
import Square from "./Square";
// import { useSelector } from "react-redux";
import calculateWinner from "./CalculateWinner";
// import { getXisNext } from "./Redux/ForState/setXIsNext";
// import { getSquare } from "./Redux/ForState/Squares";
// import { dispatch } from "./Redux/store";
// import { getInputState } from "./Redux/ForState/InputState";
// import { dispatch } from "./Redux/store";

// function Square({ value, onSquareClick }) {
//   // const [value, setvalue] = useState(null)

//   // const data = useSelector((state) => state.InputState.InputState);
//   // console.log("a value", data);
//   // console.log("Only value", value);

//   // function handleClick({value}) {
//   //   // dispatch(getInputState("redux"));
//   //   setvalue("State")
//   // }

//   return (
//     <>
//       {/* <button className="btn" onClick={handleClick}>
//       {data}
//     </button> */}

//       <button className="btn" onClick={onSquareClick}>
//         {value}
//       </button>

//       {/* onClick={handleClick} */}
//     </>
//   );
// }

//Board Component are not created
function Board({ next, squares, onPlay }) {
  // for array value
  // const [squares, setSquares] = useState(Array(9).fill(null));
  // console.log(squares,"squares");

  // dispatch(Squares(squares))
  // const s = useSelector((state)=>state.Squares.Squares)
  // console.log(s, "square");

  // for this toggle X & O
  // const next = useSelector((state) => state.XisNext.XisNext)
  // console.log(next,"next");

  function handleClick(i) {
    // no repeat value bt clickimg
    // if (squares[i]) { return; }
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    // all slice that data in
    const nextSquares = squares.slice();

    if (next) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    onPlay(nextSquares);
    // nextSquares[i] = "X";
    // setSquares(nextSquares);
    // dispatch(getSquare(nextSquares))
    // dispatch(getXisNext(!next))
    // setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    // eslint-disable-next-line
    status = "`" + winner + "`" + "is Winner!!!";
  } else {
    status = "Next player: " + (next ? "X" : "O");
  }

  return (
    <div className="container main-sec col-12">
      <div className="row boxs card">
        <div className="get-box">
      <br/>
      <div className="btns">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <br />
      <div className=""> <h4> {status } </h4></div>
    </div></div></div>
  );
}

export default Board;

// // Game Component are not created
// function Game() {

//   const next = useSelector((state) => state.XisNext.XisNext);
//   console.log(next, "aaa");

//   // redux are created
//   // const [xIsNext, setXIsNext] = useState(true);

//   const [currentMove, setCurrentMove] = useState(0);

//   const [history, setHistory] = useState([Array(9).fill(null)]);
//   const currentSquares = history[currentMove];
//   console.log(currentSquares, "logs ");

//   const handlePlay = (nextSquares) => {
//     const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
//     setHistory(nextHistory);
//     setCurrentMove(nextHistory.length - 1);
//     dispatch(getXisNext(!next));
//   };

//   const moves = history.map((squares, move) => {
//     let description;
//     if (move > 0) {
//       description = "Go to move #" + move;
//     } else {
//       description = "Go to game start";
//     }
//     return (
//       <li key={move}>
//         <button onClick={() => jumpTo(move)}>{description}</button>
//       </li>
//     );
//   });

//   const jumpTo = (nextMove) => {
//     setCurrentMove(nextMove);

//     dispatch(getXisNext(!nextMove % 2 === 0))
//     // todo
//   };

//   return (
//     <div className="game">
//       <div className="game-board">
//         <Board next={next} squares={currentSquares} onPlay={handlePlay} />
//       </div>
//       <div className="game-info">
//         <ol>{moves}</ol>
//       </div>
//     </div>
//   );
// }

// export default Game;

// calculateWinner Component creacted
