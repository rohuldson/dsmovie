import React from "react";
import { ReactComponent as StarFull } from "assets/images/starFull.svg";
import { ReactComponent as StarHalf } from "assets/images/starHalf.svg";
import { ReactComponent as StarEmpty } from "assets/images/starEmpty.svg";
import "./styles.css";

function MovieStars() {
  return (
    <div className="dsmovie-stars-container">
      <StarFull />
      <StarFull />
      <StarFull />
      <StarHalf />
      <StarEmpty />
    </div>
  );
}

export default MovieStars;
