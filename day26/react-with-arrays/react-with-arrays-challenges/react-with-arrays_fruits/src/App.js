import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      name: "🍇",
      id: 132,
      color: "purple",
      season: "winter",
      region: "south",
    },
    {
      name: "🍌",
      id: 133,
      color: "yellow",
      season: "summer",
      region: "north",
    },

    {
      name: "🍊",
      id: 134,
      color: "orange",
      season: "spring",
      region: "west",
    },
  ];

  return (
    <>
      {fruits.map(({ name, id, color }) => (
        <Card key={id} name={name} color={color} />

        // <ul key={id}>
        //   <li>{name}</li>
        //   <li>{id}</li>
        //   <li>{color}</li>
        //   <li>{season}</li>
        //   <li>{region}</li>
        // </ul>
      ))}
    </>
  );
}
