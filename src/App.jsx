import Player from "./components/Player.jsx";
import TimeChallenge from "./components/TimeChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimeChallenge title="Easy" targettime={1} />
        <TimeChallenge title="Not Easy" targettime={5} />
        <TimeChallenge title="Getting tough" targettime={10} />
        <TimeChallenge title="Pros Only" targettime={15} />
      </div>
    </>
  );
}

export default App;
