import React, { useRef } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const expRef = useRef();
  const handleClickViewMore = () => {
    expRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <NavBar />
      <Home onClick={handleClickViewMore} />
      <About />
      <Experience ref={expRef} />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
