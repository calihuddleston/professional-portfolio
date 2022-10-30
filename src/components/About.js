import React from "react";

const styles = {
  background: {
    backgroundColor: "#8e9d95a2",
    lineHeight: 1.5,
    fontFamily: "Playfair-Display",
  },
};

function About() {
  return (
    <div style={styles.background} className="p-5">
      <h4>Learn More About Me:</h4>
      <h5>
        Full stack web developer experienced in customer service with great
        interpersonal and problem-solving skills. Completed certificate from
        Michigan State University’s Coding Bootcamp in full stack web
        technologies, including JavaScript, CSS3, HTML, Node.js, React, Database
        libraries, and more. Additional education in various art courses and UX
        Design. Captivated by science and technology, understanding more about
        the world around us and improving future experiences. My technical
        competence in cutting-edge web technologies, combined with
        artistic-ability, determination to learn, and proficient problem solving
        abilities, make me a strong addition to any engineering team.{" "}
      </h5>
    </div>
  );
}

export default About;
