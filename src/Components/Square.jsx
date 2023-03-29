// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { getInputState } from "./Redux/ForState/InputState";
// import { dispatch } from "./Redux/store";
function Square({value, onSquareClick}) {


    // const [value, setvalue] = useState(null)
    
    // //   const data = useSelector((state) => state.InputState.InputState);
    // //   console.log("a value", data);
    //   // console.log("Only value", value);
    
    
    //   function handleClick() {
    //     // dispatch(getInputState("redux"));
    //     setvalue("x")
    //   }
    
      return (<>
        {/* <button className="btn" onClick={handleClick}>
          {data}
        </button> */}
        <button className="btn" onClick={onSquareClick}> {value} </button>
        </>
    
      );
    }

    export default Square;