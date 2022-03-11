import React from "react";
import { ReactComponent as Arrow } from "assets/images/left-arrow.svg";
import { ReactComponent as ArrowRight } from "assets/images/right-arrow.svg";
import "./styles.css";

function Pagination() {
  return (
    <div className="dsmovie-pagination-container">
      <div className="dsmovie-pagination-box">
        <button className="dsmovie-pagination-button" disabled={true}>
          <Arrow />
        </button>
        <p>{`${1} de ${3}`}</p>
        <button className="dsmovie-pagination-button" disabled={false}>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
