import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>It&apos;s-a-me Mario!</h1>
      <p>
        As Nintendo&apos;s mascot, Mario is widely considered to be the most
        famous video game character in history, and has been called an icon of
        the gaming industry. The Mario series of video games has sold more than
        510 million copies, making it the best-selling video game franchise.
      </p>
    </article>
  );
}
