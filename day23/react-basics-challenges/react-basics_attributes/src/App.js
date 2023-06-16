import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Ahoy sailors!</h2>
      <label></label>
      <input />{" "}
      <a className="article__link" href="https://www.spiced-academy.com/en">
        click here
      </a>
    </article>
  );
}
