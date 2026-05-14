import { useState } from "react";

export default function Player({
  initialPlayerName,
  playerSymbol,
  highlight,
  savePlayerName,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialPlayerName);

  function handleClick() {
    setIsEditing((editing) => !editing);
    savePlayerName(playerSymbol, playerName);
  }

  function handleInputChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={highlight ? "active" : ""}>
      {isEditing ? (
        <>
          <span>
            <input
              defaultValue={playerName}
              onChange={handleInputChange}
            ></input>
            <span className="player-symbol">{playerSymbol}</span>
          </span>
          <button onClick={handleClick}>Save</button>
        </>
      ) : (
        <>
          <>
            <span className={`player ${highlight}`}>
              <span className="player-name">{playerName}</span>
              <span className="player-symbol">{playerSymbol}</span>
            </span>
            <button onClick={handleClick}>Edit</button>
          </>
        </>
      )}
    </li>
  );
}
