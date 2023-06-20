import "./styles.css";
import { useState } from "react";

export default function App() {
  let [active, setActive] = useState(true);

  function handleClick() {
    setActive(!active);
    // Check that the value changes correctly.
    console.log(!active);
  }

  return (
    <main>
      <div className={`box ${active ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {active ? "Activated😭" : "Go home💕"}
      </button>
    </main>
  );
}
