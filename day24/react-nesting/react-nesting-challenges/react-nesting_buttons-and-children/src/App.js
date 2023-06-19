import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Hey</Button>
      <Button>hou</Button>
      <Button>lets</Button>
      <Button>go!</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
