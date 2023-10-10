import React, { forwardRef } from "react";
import myPhoto from "../assets/personal-photo.jpg";

const About = forwardRef(function About(_props, ref) {
  return (
    <div
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
      ref={ref}
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="sm:text-right pb-8 pl-4">
          <p className="text-4xl font-bold inline border-b-4 border-[#209CEE]">
            About
          </p>
        </div>

        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="flex justify-end ml-5">
            <img
              src={myPhoto}
              alt="my-photo"
              className="rounded-lg shadow-xl max-h-[500px] w-auto animate-fade animate-once animate-delay-150"
            />
          </div>

          <ul className="flex flex-col justify-between">
            <li className="border-l-2 animate-fade-down animate-once animate-ease-out">
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
            <li className="border-l-2 animate-fade-down animate-once animate-ease-out animate-delay-500">
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
            <li className="border-l-2 animate-fade-down animate-once animate-ease-out animate-delay-1000">
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
});

export default About;
