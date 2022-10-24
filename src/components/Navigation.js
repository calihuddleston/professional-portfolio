import React from "react";
import "../style.css";

const styles = {
  card: {
    margin: -10,
    background: "#8e9d95ff",
    fontFamily: "Playfair-Display",
    display: "flex",
    justifyContent: "center",
  },
  heading: {
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px",
    margin: 5,
    textDecoration: "none",
  },
};

function Navbar() {
  return (
    <nav className="main-header-menu">
      <div style={styles.card}>
        <a href="#Home" style={styles.heading}>
          Home
        </a>

        <a href="#About" style={styles.heading}>
          About
        </a>

        <a href="#Projects" style={styles.heading}>
          My Work
        </a>

        <a href="https://github.com/calihuddleston" style={styles.heading}>
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/cali-huddleston-3362a5235/"
          style={styles.heading}
        >
          LinkedIn
        </a>

        <a href="#Contact" style={styles.heading}>
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
