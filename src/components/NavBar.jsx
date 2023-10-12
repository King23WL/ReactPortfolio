import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/android-chrome-192x192.png";
import { Link } from "react-scroll";

export default function NavBar() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const handleClick = () => {
    setNavIsOpen(!navIsOpen);
  };

  return (
    <nav className="w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 sticky top-0 z-50">
      <div>
        <img
          src={Logo}
          alt="Logo Img"
          style={{ width: "50px", height: "50px" }}
        />
      </div>

      {/* menu */}
      <ul className={"hidden md:flex"}>
        <Link to="home" smooth={true} duration={300}>
          <li className="px-4 cursor-pointer">Home</li>
        </Link>

        <Link to="about" smooth={true} duration={300}>
          <li className="px-4 cursor-pointer">About</li>
        </Link>

        <Link to="experience" smooth={true} duration={300}>
          <li className="px-4 cursor-pointer">Experience</li>{" "}
        </Link>

        <Link to="skills" smooth={true} duration={300}>
          <li className="px-4 cursor-pointer">Skills</li>
        </Link>

        <Link to="contact" smooth={true} duration={300}>
          <li className="px-4 cursor-pointer">Contact</li>{" "}
        </Link>
      </ul>

      {/* hamburger */}
      <div className="md:hidden z-10 cursor-pointer" onClick={handleClick}>
        {navIsOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !navIsOpen
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center "
        }
      >
        <li className="py-6 text-4xl">
          <Link to="home" smooth={true} duration={300} onClick={handleClick}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="about" smooth={true} duration={300} onClick={handleClick}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            to="experience"
            smooth={true}
            duration={300}
            onClick={handleClick}
          >
            Experience
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="skills" smooth={true} duration={300} onClick={handleClick}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="contact" smooth={true} duration={300} onClick={handleClick}>
            Contact
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 ">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/xuanan-yue-210751184"
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              href="https://github.com/King23WL"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              href="mailto:xuanan.ian23y@gmail.com"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300 "
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
