import React from "react";
import "./styles.css";

// function Smiley({ isHappy }) {
//   return <div> {isHappy ? <button>😍</button> : <button>😭</button>}</div>;
// }

// export default function App() {
//   return (
//     <div className="App">
//       {<Smiley isHappy />}
//       {/* take off "isHappy" if u want the function to be false */}
//     </div>
//   );
// }

function Smiley({ isHAppy }) {
  return <div> {isHAppy ? <button>😍</button> : <button>😭</button>}</div>;
}

export default function App() {
  return <div className="App">{<Smiley isHAppy />}</div>;
}
