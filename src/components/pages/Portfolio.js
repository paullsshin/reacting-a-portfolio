import React from "react";
import Marvel from "../../images/Screenshot 2023-04-23 14.56.42.png";
import Paper from "../../images/Screenshot 2023-04-23 18.35.29.png";
import First from '../../images/port.png'
import "../../App.scss";

export default function portfolios() {
  return (
    <div class="portfolio-container">
      <div class="portfolio-body">
        <a
          className="portfolios"
          href="https://appleschaussaa.github.io/marvel-movies-3000/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={Marvel}
            className="portfolio-pic"
            id="marvel"
            alt="placeholder"
          />
          This is the first group project I worked on. It was titled Marvel Movie 3000
        </a>
      </div>
      <div class="portfolio-body">
        <a
          className="portfolios"
          href="https://paullsshin.github.io/Paper-Boy/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={Paper}
            className="portfolio-pic"
            id="marvel"
            alt="placeholder"
          />
          This was another project I worked on called Paper Boy News Service.
        </a>
      </div>
      <div class="portfolio-body">
        <a
          className="portfolios"
          href="https://paullsshin.github.io/paulls-portfolio/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={First}
            className="portfolio-pic"
            id="marvel"
            alt="placeholder"
          />
          This is another portfolio I had been working on, but this portfolio does not use React.
        </a>
      </div>
      <div class="portfolio-body">
        <a
          className="portfolios"
          href="https://appleschaussaa.github.io/marvel-movies-3000/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={Marvel}
            className="portfolio-pic"
            id="marvel"
            alt="placeholder"
          />
          These are just temporary placeholders until I get more projects done.
        </a>
      </div>
      <div class="portfolio-body">
        <a
          className="portfolios"
          href="https://appleschaussaa.github.io/marvel-movies-3000/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={Marvel}
            className="portfolio-pic"
            id="marvel"
            alt="placeholder"
          />
          These are just temporary placeholders until I get more projects done.
        </a>
      </div>
      <div class="portfolio-body">
        <a
          className="portfolios"
          href="https://appleschaussaa.github.io/marvel-movies-3000/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={Marvel}
            className="portfolio-pic"
            id="marvel"
            alt="placeholder"
          />
          These are just temporary placeholders until I get more projects done.
        </a>
      </div>
    </div>
  );
}
