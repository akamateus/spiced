import React from "react";
import "./styles.css";

function Sum({ valueA, valueB }) {
  const sum = valueA + valueB;
  return (
    <h1>
      {valueA}+{valueB} = {sum}
    </h1>
  );
}

export default function App() {
  return (
    <div>
      <Sum valueA={64} valueB={14} />
    </div>
  );
}
