import React, { useRef } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";

export default function App() {
  const aboutRef = useRef();
  const handleClickViewMore = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <NavBar />
      <Home onClick={handleClickViewMore} />
      <About ref={aboutRef} />
    </>
  );
}
