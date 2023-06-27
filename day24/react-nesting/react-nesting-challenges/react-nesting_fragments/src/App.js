import React from "react";
import "./styles.css";
import Box from "./components/Box";

export default function App() {
  return (
    <div className="flex-container">
      <Boxes color="#007bff" />
      <Boxes color="#fc3" />
      <Boxes color="#ff3333" />
    </div>
  );
}

function Boxes({ Box }) {
  return (
    <>
      <Boxes color="#007bff" />
      <Boxes color="#fc3" />
      <Boxes color="#ff3333" />
    </>
  );
}
