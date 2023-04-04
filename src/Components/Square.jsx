
function Square({value, onSquareClick}) {

      return (<>
        <button className="btn btn-log" onClick={onSquareClick}> {value} </button>
        </>
    
      );
    }

    export default Square;