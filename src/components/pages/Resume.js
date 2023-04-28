import React from "react";
import "../../App.scss";
import Code from "../../images/coding.jpg";

export default function Resume() {
  return (
    <div className="resume-content">
      <div className="combine">
        Welcome. If you would like to view a copy of my resume then press on the
        link!
        <a
          href="https://www.linkedin.com/in/paull-shin-b3b0b410b/"
          target="_blank"
          rel="noreferrer"
        >
          <br />
          Click Here!
        </a>
        <br />
        <br />
        <div className="items-container">
          <ul className="items">
            Things I have gained experience in:
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Jquery</li>
            <li>Bootstrap</li>
            <li>React</li>
            <li>NodeJs</li>
            <li>Express</li>
            <li>Mongoose</li>
            <li>Sequelize</li>
          </ul>
        </div>
      </div>
      <div>
        <img src={Code} id="code-img" alt="placeholder" />
      </div>
    </div>
  );
}
