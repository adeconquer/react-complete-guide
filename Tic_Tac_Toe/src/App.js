import React, {Fragment, useState} from 'react'


const Square = props => {
  // const [value, setValue] = useState(null)
  // const clickHandler = () => {
  //   if (value) return
  //   setValue('X')
  // }

    
  return <button className="square" onClick={props.onSquareClick}>{props.value}</button>
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const Board = () => {
  const [xIsNext, setXIsNext] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null))
  const clickHandler = (i) => {
    if(squares[i] || calculateWinner(squares)) return
    const nextSquares = squares.slice();
    if(xIsNext){
      nextSquares[i] = "X";
      
    }else {
      nextSquares[i] = 'O'
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext)
  }

  const winner = calculateWinner(squares)
  let status;
  status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X':'O'}`
  return (
    <Fragment>
      <div className='status'>{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={clickHandler.bind(null, 0)}/>
        <Square value={squares[1]} onSquareClick={clickHandler.bind(null, 1)}/>
        <Square value={squares[2]} onSquareClick={clickHandler.bind(null, 2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={clickHandler.bind(null, 3)}/>
        <Square value={squares[4]} onSquareClick={clickHandler.bind(null, 4)}/>
        <Square value={squares[5]} onSquareClick={clickHandler.bind(null, 5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={clickHandler.bind(null, 6)}/>
        <Square value={squares[7]} onSquareClick={clickHandler.bind(null, 7)}/>
        <Square value={squares[8]} onSquareClick={clickHandler.bind(null, 8)}/>
      </div>
    </Fragment>
  )
}

const Game = props => {
  const [xIsNext, setXIsNext] = useState(true) 
  const [history, setHistory] = useState([Array(9).fill(null)])
  const currentSquares = history[history.length - 1]

  return (
    <div className='game'>
      <div className='game-board'>
        <Board xIsNext={xIsNext} squares={currentSquares}/>
      </div>
      <div className='game-info'>
        <ol>{/*Todo*/}</ol>
      </div>
    </div>
  )
}

export default Game
