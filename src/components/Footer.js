import React from "react";
import css from "../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

const styles = {
  background: {
    backgroundColor: "#8e9d95ff",
    fontFamily: "Playfair-Display",
  },
};

function Footer() {
  return (
    <div
      className="footer d-flex justify-content-center justify-content-around text-white p-4"
      style={styles.background}
    >
      <a
        href="https://www.instagram.com/coding.momma/"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" color="white" />
      </a>
      <a href="https://twitter.com/cali_huddleston" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" color="white" />
      </a>
      <a
        href="https://www.linkedin.com/in/cali-huddleston-3362a5235/"
        className="linkedin social"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" color="white" />
      </a>
      <a
        href="https://www.github.com/calihuddleston/"
        className="linkedin social"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" color="white" />
      </a>
      <a
        href="https://discord.com/channels/1035696594349211698/1035696594349211701"
        className="discord social"
      >
        <FontAwesomeIcon icon={faDiscord} size="2x" color="white" />
      </a>
    </div>
  );
}

export default Footer;
