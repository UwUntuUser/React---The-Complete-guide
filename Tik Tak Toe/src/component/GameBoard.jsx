import { useState } from "react"

export function GameBoard({onPlayerChange, board}) {
    return <ol id="game-board">
        {board.map((row, rowIndex) => 
            <li key={rowIndex}>
               <ol> 
                    {row.map((col, columnIndex) => 
                    <li key={columnIndex}> 
                        <button onClick={() => onPlayerChange(rowIndex, columnIndex)} disabled = {col !== null}>
                            {col}
                        </button> 
                    </li>)} 
                </ol>
            </li>) 
        
        }
    </ol>

}