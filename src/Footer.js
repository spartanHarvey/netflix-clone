import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faGithub,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_content">
        <a
          href="https://www.instagram.com/gnathan_9"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://www.youtube.com/humorjorge" className="youtube social">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a
          href="https://www.twitter.com/jorgenathan1"
          className="twitter social"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href="https://www.github.com/spartanHarvey"
          className="github social"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
