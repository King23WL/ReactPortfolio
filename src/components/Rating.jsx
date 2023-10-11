import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function Rating({ num }) {
  return (
    <div className="flex ml-3 justify-center space-x-1">
      {[...Array(Math.floor(num)).keys()].map((index) => (
        <FaStar fill="yellow" key={index} />
      ))}

      {num % 1 === 0.5 && <FaStarHalfAlt fill="yellow" />}

      {[...Array(Math.floor(5 - num)).keys()].map((index) => (
        <FaRegStar fill="yellow" key={index} />
      ))}
    </div>
  );
}
