import Game from "./components/Game.jsx";
import Player from "./components/Player.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <Game level="Easy" time={1000}></Game>
        <Game level="Not easy" time={5000}></Game>
        <Game level="Getting though" time={10000}></Game>
        <Game level="Pros only" time={15000}></Game>
      </div>
    </>
  );
}

export default App;
