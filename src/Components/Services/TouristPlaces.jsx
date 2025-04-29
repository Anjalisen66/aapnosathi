// src/components/services/TouristPlaces.jsx
import React from "react";
import collage from '../assets/image2.jpg';
import desert from "../assets/image2.jpg";
import torn from "../assets/image2.jpg";

const TouristPlaces = () => {
  return (
    <div className="w-full font-sans">
      {/* Top Collage Section */}
      <div
        className="relative h-[300px] sm:h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${collage})` }}
      >
        {/* Title */}
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl sm:text-6xl font-bold text-white drop-shadow-md">
          JODHPUR
        </h1>

        {/* Search Bar */}
        <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[70%] md:w-[50%] bg-white shadow-md rounded-2xl flex items-center justify-between px-4 py-2 z-10">
          <input
            type="text"
            placeholder="Search tourist places..."
            className="flex-grow px-2 py-1 text-gray-800 outline-none"
          />
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
            🔍
          </button>
        </div>
      </div>

      {/* Desert Section */}
      <div className="relative mt-[60px] sm:mt-[80px]">
        <img src={desert} alt="desert" className="w-full h-[500px] object-cover" />

        {/* Text Overlay */}
        <div className="absolute top-1/3 left-6 sm:left-12 text-white drop-shadow-xl">
          <h2 className="text-2xl sm:text-4xl font-semibold leading-tight">
            TRAVEL MEMORIES <br /> YOU’LL NEVER FORGET
          </h2>
          <button className="mt-4 text-3xl animate-bounce">⬇️</button>
        </div>

        {/* Torn Paper Image */}
        <img src={torn} alt="torn-edge" className="absolute bottom-0 left-0 w-full" />
      </div>
    </div>
  );
};

export default TouristPlaces;
