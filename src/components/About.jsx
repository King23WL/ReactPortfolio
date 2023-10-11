import React, { useRef } from "react";
import { useIsVisible } from "../utility/useIsVisible";

export default function About() {
  const ref1 = useRef();
  const ref2 = useRef();
  const isVisible1 = useIsVisible(ref1);
  const isVisible2 = useIsVisible(ref2);
  return (
    <div id="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#209CEE]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p
              ref={ref1}
              className={`${
                isVisible1
                  ? "animate-flip-down animate-once animate-ease-in"
                  : ""
              }`}
            >
              Hi. I'm Xuan'an (Ian) Yue, nice to meet you. Thanks for being
              here.
            </p>
          </div>
          <div>
            <p
              ref={ref2}
              className={`${
                isVisible2
                  ? "animate-flip-up animate-once animate-ease-in animate-delay-500"
                  : ""
              }`}
            >
              I am a passionate and optimistic person. Years of experience in
              software development have made me good at accepting challenges.
              The charm of software for me is that every time I complete a
              project or solve a bug, I can get a great sense of accomplishment
              from it. In normal life, I like basketball and Formula One.
              Besides that I also love electronic music.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
