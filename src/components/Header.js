import React from "react";
import Typewriter from "typewriter-effect";
import "../style.css";
import image from "../images/IMG_9515.png";

const styles = {
  header: {
    fontFamily: "Playfair-Display",
    padding: 150,
  },
  description: {
    backgroundColor: "#d58857ff",
    width: 800,
    fontSize: 40,
    position: "relative",
    left: 20,
  },
  typeWriter: {
    backgroundColor: "#d58857ff",
    width: 800,
    position: "relative",
    left: 60,
    fontSize: 35,
  },
  image: {
    height: 300,
    width: 300,
    float: "right",
    border: "solid 4px rgb(255, 255, 255)",
    borderRadius: 200,
    position: "absolute",
    right: 100,
    top: 150,
  },
  circleOne: {
    padding: 20,
    margin: 20,
    display: "inline-block",
    backgroundColor: "white",
    borderRadius: "50%",
    width: 100,
    height: 100,
    opacity: 0.4,
    border: "1px solid",
    position: "absolute",
    right: 70,
    top: 120,
  },
  circleTwo: {
    padding: 70,
    margin: 20,
    display: "inline-block",
    backgroundColor: "#d58857c2",
    borderRadius: "50%",
    width: 100,
    height: 100,
    opacity: 0.4,
    border: "1px solid",
    position: "absolute",
    right: 10,
    top: 180,
  },
};

function Header() {
  return (
    <div style={styles.header} className="text-black m-10 d-flex col">
      <div>
        <div style={styles.circleTwo}></div>
        <div style={styles.circleOne}></div>
        <img src={image} style={styles.image}></img>
      </div>

      <div>
        <h1
          style={styles.description}
          className="p-3 border border-dark rounded"
        >
          Hi! I'm Cali.
        </h1>
        <h2
          style={styles.typeWriter}
          className="p-3 border border-dark d-flex justify-content-center rounded"
        >
          <Typewriter
            options={{
              strings: [
                "I am a Mom.",
                "I am an artist.",
                "I am a science enthusiast.",
                "I am a full stack software engineer.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
      </div>
    </div>
  );
}

export default Header;
