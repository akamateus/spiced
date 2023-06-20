import "./FavoriteButton.css";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";
import { useState } from "react";

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);
  // this should be a state variable
  function toggleFavorite() {
    setIsFavorite(!isFavorite);
  }

  return (
    <>
      <button
        onClick={() => {
          toggleFavorite(!isFavorite);
        }}
      >
        {isFavorite ? <StarFilled /> : <Star />}
      </button>
    </>
  );
}
