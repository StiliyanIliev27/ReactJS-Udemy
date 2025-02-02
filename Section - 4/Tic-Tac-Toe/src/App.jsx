import { act, useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquire() {
    setActivePlayer((currActivePlayer) =>
      currActivePlayer === "X" ? "O" : "X"
    );
  }

  return (
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player
          initialName="Player 1"
          symbol="X"
          isActive={activePlayer === "X"}
        />
        <Player
          initialName="Player 2"
          symbol="O"
          isActive={activePlayer === "O"}
        />
      </ol>
      <GameBoard
        onSelectSquire={handleSelectSquire}
        activePlayerSymbol={activePlayer}
      />
    </div>
  );
}

export default App;
