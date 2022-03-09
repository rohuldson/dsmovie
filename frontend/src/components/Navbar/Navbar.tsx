import React from "react";
import { ReactComponent as GithubIcon } from "assets/images/gitlogo.svg";
import "./styles.css";

function NavBar() {
  return (
    <header>
      <nav className="container">
        <div className="movie-nav-content">
          <h1>MovieRated</h1>
          <a
            href="https://www.github.com/rohuldson"
            target="_blank"
            rel="noreferrer"
          >
            <div className="movie-contact-container">
              <GithubIcon />
              <p className="movie-link-name">rohudlson</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
