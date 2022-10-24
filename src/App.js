import React from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navigation />
      <Header />
      {/* <About /> */}
      <Project />
      {/* <Contact />
      <Footer /> */}
    </div>
  );
}
