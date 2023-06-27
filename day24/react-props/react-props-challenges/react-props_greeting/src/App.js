import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <Greeting name="Jan" />
//     </div>
//   );
// }
// function Greeting({ name }) {
//   const coaches = ["Klaus", "Jan", "Marcell", "Yair", "Sven", "Gimena"];
//   if (coaches.includes(name)) {
//     return <h1>Hello, Coach!</h1>;
//   } else {
//     return <h1>Hello, {name}!</h1>;
//   }
// }

export default function app() {
  return (
    <div className="App">
      <Greeting name="klaus" />
    </div>
  );
}

function Greeting({ name }) {
  const coaches = ["klaus", "gimena", "Yair"];
  if (coaches.includes(name)) {
    return <h1>Hello, Coach</h1>;
  } else {
    return <h1> Hello, {name}!</h1>;
  }
}
