import React from "react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bottom">
      <ul>
        <li>
          <a
            href="https://github.com/paullsshin"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/paull-shin-b3b0b410b/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UC-C60tQYOpwCctYEkgGqmTw"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube />
          </a>
        </li>
      </ul>
      <section>&copy; Copyright 2023</section>
    </footer>
  );
};

export default Footer;

// trying to make this bug go away