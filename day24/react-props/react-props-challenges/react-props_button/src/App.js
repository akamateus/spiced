import React from "react";
import "./styles.css";

// export default function App() {
//   function handleClick() {
//     console.log("Clicked the button");
//   }
//   return (
//     <Button
//       color="blue"
//       backgroundColor="white"
//       disabled={false}
//       text={"My Button"}
//       handleClick={handleClick}
//     />
//   );
// }

// function Button({ color, backgroundColor, disabled, text, handleClick }) {
//   return (
//     <button
//       style={{ color: color, backgroundColor: backgroundColor }}
//       disabled={disabled}
//       onClick={handleClick}
//     >
//       {text}
//     </button>
//   );
// }

export default function App() {
  const handleClick = () => {
    console.log("You clicked me!");
  };
  return (
    <Button
      onClick={handleClick}
      color="blue"
      backgroundColor="green"
      disabled={false}
      text={"My Button"}
    />
  );
}

function Button({ color, disabled, text, backgroundColor, handleClick }) {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      style={{ color: color, backgroundColor: backgroundColor }}
    >
      {text}
    </button>
  );
}
