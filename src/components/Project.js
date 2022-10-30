import React from "react";
import Carousel from "react-bootstrap/Carousel";
import project3 from "../images/project3.png";
import "../style.css";

const styles = {
  background: {
    backgroundColor: "#d58857c2",
  },
  describe: {
    backgroundColor: "#8e9d95d6",
    fontFamily: "Playfair-Display",
  },
};

function Projects() {
  return (
    <div style={styles.background} className="p-4">
      {/* Creates carousel for projects */}
      <Carousel>
        <Carousel.Item>
          <a
            href="https://github.com/calihuddleston/park-me"
            className="d-flex justify-content-center"
          >
            <img
              className="w-75"
              src="https://user-images.githubusercontent.com/105446523/179026069-76278c0a-c0f1-4789-b197-97f198497480.png"
              alt="First slide"
            />
          </a>

          <Carousel.Caption style={styles.describe} className="p-3 rounded">
            <h3>Park Me</h3>
            <p>
              Allows a user to search parking garages near their destination(s).
              Successful use of front-end technologies/libraries to provide an
              application that is responsive and solves a user problem. Guided a
              team to complete the project on time, follow project criteria, and
              establish goals, in addition to creating wire-frame and UI.
            </p>
            <p>Click Image to View Repository</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a
            href="https://github.com/Bootsbigenough/Travel-App"
            className="d-flex justify-content-center"
          >
            <img
              className="d-block w-75"
              src="https://user-images.githubusercontent.com/102004484/190521257-40af5e1b-0569-4ff7-bd13-c31a8b82e8e6.png"
              alt="Second slide"
            />
          </a>

          <Carousel.Caption style={styles.describe} className="p-3 rounded">
            <h3>Earth Trek</h3>
            <p>
              Users have the ability to sign-up/log-in and share their travel
              experiences. Successful of use of front-end frameworks to provide
              a polished UI and back-end SQL database to retrieve, store, and
              save user data. Created UI for login/signup and homepage, in
              addition to creating back-end database and http request logic.
            </p>
            <p>Click on Image to View Repository</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a
            href="https://github.com/BillyFletcher99/a-new-leaf-application"
            className="d-flex justify-content-center"
          >
            <img className="d-block w-75" src={project3} alt="Third slide" />
          </a>
          <Carousel.Caption style={styles.describe} className="p-3 rounded">
            <h3>A New Leaf</h3>
            <p>Currently in the works!</p>
            <p>
              Application that reminds users through push notifications to care
              for their houseplants by upkeeping their virtual plants water and
              happiness levels. Allows a user to search their houseplants and
              provides information in regards to those plants. Successful use of
              front and back-end technologies/frameworks to provide an
              application that is able to retrieve data, responsive, and solves
              a user problem. Guided a team by assigning tasks and ensuring
              goals were met. In addition to creating a NoSQL database and API.
            </p>
            <p>Click on the Image to Learn More!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Projects;
