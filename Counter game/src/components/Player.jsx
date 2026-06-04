import { useRef, useState } from "react";

export default function Player() {
  const [userName, setUserName] = useState();
  const inputRef = useRef();

  function handleButtonClick() {
    setUserName(inputRef.current.value);
    inputRef.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {userName ? userName : "unknown entity"}</h2>
      <p>
        <input ref={inputRef} type="text" />
        <button onClick={handleButtonClick}>Set Name</button>
      </p>
    </section>
  );
}
