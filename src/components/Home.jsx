import React, { useRef } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useIsVisible } from "../utility/useIsVisible";
import { Link } from "react-scroll";

export default function Home() {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#209CEE] animate-bounce">Hi, my name is</p>
        <h1
          ref={ref1}
          className={`text-4xl sm:text-7xl font-bold text-[#ccd6f6] ${
            isVisible1
              ? "animate-fade-right animate-once animate-delay-[250ms]"
              : ""
          }`}
        >
          Xuan'an Yue
        </h1>
        <h2
          ref={ref2}
          className={`text-3xl sm:text-6xl font-bold text-[#8892b0] ${
            isVisible2 ? "animate-fade-left animate-once animate-delay-500" : ""
          }`}
        >
          I'm a Software Engineer,
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          with hands-on experience in developing web applications to provide
          industrial automation solutions.
        </p>
        <div>
          <Link to="about" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#209CEE] hover:border-[#209CEE] rounded">
              View More
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
