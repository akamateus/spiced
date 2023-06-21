import "./Card.css";

export default function Card({ name, color }) {
  return (
    <p className={"card--`${purple}`"}>
      {name}
      {color}
    </p>
  );
}
