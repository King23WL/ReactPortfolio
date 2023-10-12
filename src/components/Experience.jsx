import React, { useRef } from "react";
import myPhoto from "../assets/personal-photo.jpg";
import { useIsVisible } from "../utility/useIsVisible";

function Experience() {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);
  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref3);
  const ref4 = useRef();
  const isVisible4 = useIsVisible(ref4);
  return (
    <div
      name="experience"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center ">
        <div className="sm:text-right pb-8 pl-4">
          <p className="text-4xl font-bold inline border-b-4 border-[#209CEE]">
            Experience
          </p>
        </div>

        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="flex justify-end ml-5">
            <img
              ref={ref1}
              src={myPhoto}
              alt="my-photo"
              className={`rounded-lg shadow-xl max-h-[400px] w-auto ${
                isVisible1
                  ? "animate-fade animate-once animate-delay-[250ms]"
                  : ""
              }`}
            />
          </div>

          <ul className="flex flex-col justify-between">
            <li
              ref={ref2}
              className={`border-l-2 ${
                isVisible2
                  ? "animate-fade-down animate-once animate-ease-out animate-delay-[250ms]"
                  : ""
              }`}
            >
              <p className="md:text-2xl">
                In 2020, I graduated from <br />
                <span className="text-[#ffffff] font-bold text-3xl">
                  UConn
                </span>{" "}
                <br />
                with Bachelor's Degree in Electrical Engineering.
              </p>
            </li>
            <br />
            <li
              ref={ref3}
              className={`border-l-2 ${
                isVisible3
                  ? "animate-fade-down animate-once animate-ease-out animate-delay-[550ms]"
                  : ""
              }`}
            >
              <p className="md:text-2xl">
                I received my Master's Degree in Electrical & Computer
                Engineering from <br />
                <span className="text-[#2774AE] font-bold text-4xl">
                  UCLA
                </span>{" "}
                <br />
                in 2022.
              </p>
            </li>
            <br />
            <li
              ref={ref4}
              className={`border-l-2  ${
                isVisible4
                  ? "animate-fade-down animate-once animate-ease-out animate-delay-[850ms]"
                  : ""
              }`}
            >
              <p className="md:text-2xl">
                Now, I'm a Software Engineer at <br />
                <span className="text-[#f9b500] font-bold text-4xl">N</span>
                <span className="text-[#7bb1db] font-bold text-4xl">X</span>
                <span className="text-[#c9d200] font-bold text-4xl">
                  P
                </span>{" "}
                Semiconductors.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
