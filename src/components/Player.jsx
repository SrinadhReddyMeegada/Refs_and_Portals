import { useRef, useState } from "react";

export default function Player() {
  const [name, setName] = useState(null);
  const playerName = useRef();
  const handleClick = () => {
    setName(playerName.current.value);
    playerName.current.value = "";
  };
  return (
    <section id="player">
      <h2>Welcome {name ? name : "unknown entity"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
