import React, { useState } from "react";
// import Square from "./Square";
import { useSelector } from "react-redux";
import { getXisNext } from "./Redux/ForState/setXIsNext";
// import { getSquare } from "./Redux/ForState/Squares";
import { dispatch } from "./Redux/store";
// import { getInputState } from "./Redux/ForState/InputState";
// import { dispatch } from "./Redux/store";

function Square({value, onSquareClick}) {
// const [value, setvalue] = useState(null)

  // const data = useSelector((state) => state.InputState.InputState);
  // console.log("a value", data);
  // console.log("Only value", value);


  // function handleClick({value}) {
  //   // dispatch(getInputState("redux"));
  //   setvalue("State")
  // }

  return (<>
    {/* <button className="btn" onClick={handleClick}>
      {data}
    </button> */}

    <button className="btn" onClick={onSquareClick} > {value} </button> 
    
    {/* onClick={handleClick} */}

    </>

  );
}


//Main Component 
function InputBtn() {

// for array value 
  const [squares, setSquares] = useState(Array(9).fill(null));
  console.log(squares,"squares");
  
  // dispatch(Squares(squares))
// const s = useSelector((state)=>state.Squares.Squares)
// console.log(s, "square");

  // for this toggle X & O
  const next = useSelector((state) => state.XisNext.XisNext)
  console.log(next,"next");

  function handleClick(i) {

    // no repeat value bt clickimg
    if (squares[i]) { return; }

    // all slice that data in
    const nextSquares = squares.slice();

    if (next) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    // nextSquares[i] = "X";
    setSquares(nextSquares);
    // dispatch(getSquare(nextSquares))
    dispatch(getXisNext(!next))
    // setXIsNext(!xIsNext);
  }


  
  return (
    <div className="main-box">
      InputBtn
      <div className="box">
        <Square value={squares[0]}  onSquareClick={() => handleClick(0)}   />
        <Square value={squares[1]}  onSquareClick={() => handleClick(1)}   />
        <Square value={squares[2]}  onSquareClick={() => handleClick(2)}  />
      </div>
      <div className="box">
        <Square value={squares[3]}  onSquareClick={() => handleClick(3)}  />
        <Square value={squares[4]}  onSquareClick={() => handleClick(4)}  />
        <Square value={squares[5]}  onSquareClick={() => handleClick(5)}  />
      </div>
      <div className="box">
        <Square value={squares[6]}  onSquareClick={() => handleClick(6)}  />
        <Square value={squares[7]}  onSquareClick={() => handleClick(7)}  />
        <Square value={squares[8]}  onSquareClick={() => handleClick(8)}  />
      </div>
    </div>
  );
}

export default InputBtn;
