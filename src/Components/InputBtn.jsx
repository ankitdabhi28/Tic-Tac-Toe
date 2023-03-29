import React, { useState } from "react";
// import Square from "./Square";
// import { useSelector } from "react-redux";
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

  // eslint-disable-next-line
  const [squares, setSquares] = useState(Array(9).fill(null));
  
  
  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }


  
  return (
    <div>
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
