import React from "react";
import Typewriter from "typewriter-effect";
import "../style.css";
import image from "../images/IMG_9515.png";

const styles = {
  header: {
    fontFamily: "Playfair-Display",
    backgroundColor: "#d58857c2",
    color: "white",
    padding: 50,
    marginTop: 10,
    marginLeft: -10,
    marginRight: -10,
  },
  description: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    borderBottom: "dotted",
    padding: 15,
  },
  typeWriter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  image: {
    height: 300,
    width: 300,
    float: "right",
    marginTop: -100,
  },
};

function Header() {
  return (
    <div style={styles.header}>
      <h1 style={styles.description}>Hi, I'm Cali!</h1>
      <h2 style={styles.typeWriter}>
        <Typewriter
          options={{
            strings: [
              "I am a full stack software engineer.",
              "I am a science enthusiast.",
              "I am an artist.",
              "I am a Mom.",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
      <img src={image} style={styles.image}></img>
    </div>
  );
}

export default Header;
