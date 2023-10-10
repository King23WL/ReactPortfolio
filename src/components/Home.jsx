import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Home() {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#209CEE]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Xuanan Yue
        </h1>
        <h2 className="text-3xl sm:text-6xl font-bold text-[#8892b0]">
          I'm a Software Engineer,
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          with hands-on experience in developing web applications to provide
          industrial automation solutions.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#209CEE] hover:border-[#209CEE]">
            View More
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
