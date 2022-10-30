import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navigation";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

const styles = {
  page: {
    background: "#dbd1c6ff",
    margin: -20,
  },
};

export default function App() {
  return (
    <div style={styles.page}>
      <Router>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/MyWork" element={<Project />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
