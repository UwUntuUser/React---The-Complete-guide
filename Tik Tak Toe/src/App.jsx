import { useState } from "react";
import Player from "./component/Players";
import { GameBoard } from "./component/GameBoard";
import Logs from "./component/Log";
import { WINNING_COMBINATIONS } from "./utils/Winning-combination";
import GameOver from "./component/gameOver";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function setActivePlayer(playerTurn) {
  let player = "X";

  if (playerTurn.length > 0 && playerTurn[0].player === "X") {
    player = "O";
  }
  return player;
}

function App() {
  const [playerTurn, setPlayerTurn] = useState([]);
  const [playerNames, setPlayerNames] = useState({
    X: "Player 1",
    O: "Player 2",
  });

  let activePlayer = setActivePlayer(playerTurn);
  let gameBoard = [...initialBoard.map((innerArray) => [...innerArray])];
  let winner;
  let draw;

  for (const turn of playerTurn) {
    const { player, coordinates } = turn;
    const { row, column } = coordinates;

    gameBoard[row][column] = player;
  }

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combination[0].row][combination[0].column];
    const secondSquare = gameBoard[combination[1].row][combination[1].column];
    const thirdSquare = gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquare !== null &&
      firstSquare === secondSquare &&
      firstSquare === thirdSquare
    ) {
      winner = playerNames[firstSquare];
    }
  }

  if (playerTurn !== null && playerTurn.length === 9 && !winner) {
    draw = true;
  }

  function changeCurrentPlayer(rowIndex, columnIndex) {
    setPlayerTurn((turns) => {
      let currentPlayer = setActivePlayer(turns);

      let updatedTurns = [
        {
          coordinates: { row: rowIndex, column: columnIndex },
          player: currentPlayer,
        },
        ...turns,
      ];
      return updatedTurns;
    });
  }

  function clearGame() {
    setPlayerTurn([]);
  }

  function onSavePlayerName(symbol, newName) {
    setPlayerNames((oldPlayerNames) => {
      return { ...oldPlayerNames, [symbol]: newName };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player
            id="player"
            highlight={activePlayer === "X"}
            initialPlayerName="Player 1"
            playerSymbol="X"
            savePlayerName={onSavePlayerName}
          ></Player>
          <Player
            id="player"
            highlight={activePlayer === "O"}
            initialPlayerName="Player 2"
            playerSymbol="O"
            savePlayerName={onSavePlayerName}
          ></Player>
        </ol>
        <GameBoard
          onPlayerChange={changeCurrentPlayer}
          board={gameBoard}
        ></GameBoard>
        {(winner || draw) && (
          <GameOver winner={winner} rematch={clearGame}></GameOver>
        )}
      </div>
      <Logs turns={playerTurn}></Logs>
    </main>
  );
}

export default App;
