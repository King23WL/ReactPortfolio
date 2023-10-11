import React from "react";
import {
  FaReact,
  FaCss3Alt,
  FaAws,
  FaNodeJs,
  FaDocker,
  FaPython,
} from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoFlask,
  BiLogoKubernetes,
} from "react-icons/bi";
import { DiMysql } from "react-icons/di";

export default function Skills() {
  return (
    <div id="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#209CEE] ">
            Skills
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div
            className={`shadow-md shadow-[#040c16] hover:scale-110 hover:text-[#61dbfb] duration-500 bg-gray-500 pt-5 rounded-sm`}
          >
            <FaReact className=" mx-auto" size="50px" />
            <p className="my-4">React.js</p>
          </div>
          <div
            className={`shadow-md shadow-[#040c16] hover:scale-110 hover:text-[#F0DB4F] duration-500 bg-gray-500 pt-5 rounded-sm`}
          >
            <BiLogoJavascript className=" mx-auto" size="50px" />
            <p className="my-4">JavaScript</p>
          </div>
          <div
            className={`shadow-md shadow-[#040c16] hover:scale-110 hover:text-[#F06529] duration-500 bg-gray-500 pt-5 rounded-sm `}
          >
            <AiFillHtml5 className=" mx-auto" size="50px" />
            <p className="my-4">HTML5</p>
          </div>
          <div
            className={`shadow-md shadow-[#040c16] hover:scale-110 hover:text-[#264de4] duration-500 bg-gray-500 pt-5 rounded-sm `}
          >
            <FaCss3Alt className=" mx-auto" size="50px" />
            <p className="my-4">CSS</p>
          </div>
          <div
            className={`shadow-md shadow-[#040c16] hover:scale-110 hover:text-[#FFE873] duration-500 bg-gray-500 pt-5 rounded-sm `}
          >
            <FaPython className=" mx-auto" size="50px" />
            <p className="my-4">Python</p>
          </div>
          <div
            className={`shadow-md shadow-[#040c16] hover:scale-110 hover:text-[#FF9900] duration-500 bg-gray-500 pt-5 rounded-sm `}
          >
            <FaAws className=" mx-auto" size="50px" />
            <p className="my-4">AWS</p>
          </div>
          <div
            className={`shadow-md shadow-[#040c16] hover:scale-110 hover:text-[#00758F] duration-500 bg-gray-500 pt-5 rounded-sm `}
          >
            <DiMysql className=" mx-auto" size="50px" />
            <p className="my-4">MySQL</p>
          </div>
          <div
            className={`shadow-md shadow-[#040c16] hover:scale-110 hover:text-[#4DB33D] duration-500 bg-gray-500 pt-5 rounded-sm `}
          >
            <BiLogoMongodb className=" mx-auto" size="50px" />
            <p className="my-4">MongoDB</p>
          </div>
          <div
            className={`shadow-md shadow-[#040c16] hover:scale-110 hover:text-white duration-500 bg-gray-500 pt-5 rounded-sm `}
          >
            <BiLogoFlask className=" mx-auto" size="50px" />
            <p className="my-4">Flask</p>
          </div>
          <div
            className={`shadow-md shadow-[#040c16] hover:scale-110 hover:text-[#68A063] duration-500 bg-gray-500 pt-5 rounded-sm `}
          >
            <FaNodeJs className=" mx-auto" size="50px" />
            <p className="my-4">Node.js</p>
          </div>
          <div
            className={`shadow-md shadow-[#040c16] hover:scale-110 hover:text-[#0DB7ED] duration-500 bg-gray-500 pt-5 rounded-sm `}
          >
            <FaDocker className=" mx-auto" size="50px" />
            <p className="my-4">Docker</p>
          </div>
          <div
            className={`shadow-md shadow-[#040c16] hover:scale-110 hover:text-[#3970e4] duration-500 bg-gray-500 pt-5 rounded-sm `}
          >
            <BiLogoKubernetes className=" mx-auto" size="50px" />
            <p className="my-4">Kubernetes</p>
          </div>
        </div>
      </div>
    </div>
  );
}
