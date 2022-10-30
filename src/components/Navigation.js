import React from "react";
import "../style.css";
import { Link } from "react-router-dom";

const styles = {
  card: {
    background: "#8e9d95ff",
    fontFamily: "Playfair-Display",
  },
  heading: {
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    // color: "white",
    // padding: "0 20px",
    // margin: 5,
    textDecoration: "none",
  },
};

function Navbar() {
  return (
    <nav
      className="main-header-menu d-flex justify-content-around p-3"
      style={styles.card}
    >
      {/* link to main page with about section */}
      <Link
        to="/professional-portfolio"
        style={styles.heading}
        className="text-white"
      >
        Home
      </Link>

      {/* link to projects section */}
      <Link
        to="/professional-portfolio/MyWork"
        style={styles.heading}
        className="text-white"
      >
        My Work
      </Link>

      <a
        href="https://github.com/calihuddleston"
        style={styles.heading}
        className="text-white"
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/cali-huddleston-3362a5235/"
        style={styles.heading}
        className="text-white"
      >
        LinkedIn
      </a>

      {/* link to resume section */}
      <Link
        to="/professional-portfolio/Resume"
        style={styles.heading}
        className="text-white"
      >
        Resume
      </Link>
    </nav>
  );
}

export default Navbar;
