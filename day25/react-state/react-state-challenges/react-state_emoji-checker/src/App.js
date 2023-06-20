import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [fish, setFish] = useState("?");
  const validCode = "🐡🐠🐋";

  const handleClick = (selectedFish) => {
    setFish(selectedFish);
  };

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            handleClick("🐡");
            console.log("Update Code!");
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐋");
            console.log("Update Code!");
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐠");
            console.log("Update Code!");
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button
        type="button"
        onClick={() => {
          console.log("Reset Code!");
          setFish("?");
        }}
      >
        Reset
      </button>
      <h2>{fish}</h2>

      {fish === validCode && <p>Valid code!</p>}
    </div>
  );
}
