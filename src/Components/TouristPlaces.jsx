import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import desert from "../assets/image1.jpg";
import filterDecor from "../assets/image2.jpg";
import collage from "../assets/image.png";
import { ArrowRight } from "lucide-react";
import mehrangarhImg from "../assets/WhatsApp Image 2025-04-08 at 16.03.34_9347f31b.jpg";
import umaidImg from "../assets/WhatsApp Image 2025-04-08 at 16.03.34_5ac2d816.jpg";
import mandoreImg from "../assets/umaid-bhawan.jpg";
import { Link } from "react-router-dom";


const ExploreJodhpur = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const places = [
    "Mehrangarh Fort",
    "Umaid Bhawan Palace",
    "Jaswant Thada",
    "Clock Tower",
    "Mandore Gardens",
    "Toorji Ka Jhalra",
  ];

  const attractions = [
    {
      name: "Mehrangarh Fort",
      image: mehrangarhImg,
      path: "mehrangarh-fort",
    },
    {
      name: "Mandore Gardens",
      image: mandoreImg,
      path: "mandore-gardens",
    },
    {
      name: "Umaid Bhawan Palace",
      image: umaidImg,
      path: "umaid-bhawan-palace",
    },
  ];
  
  

  const handleInput = (e) => {
    const value = e.target.value;
    setQuery(value);
    setSuggestions(
      value.length > 0
        ? places.filter((place) =>
            place.toLowerCase().includes(value.toLowerCase())
          )
        : []
    );
  };

  const handleSelect = (place) => {
    setQuery("");
    setSuggestions([]);
    navigate(`/place/${encodeURIComponent(place)}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      handleSelect(query.trim());
    }
  };

  const handleCardClick = (path) => {
    navigate(`/place/${path}`);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="w-full h-[350px] bg-cover bg-center relative flex items-center justify-center text-white text-center"
        style={{ backgroundImage: `url(${desert})` }}
      >
        <div className="bg-black bg-opacity-30 w-full h-full absolute top-0 left-0" />
        <div className="z-10">
          <h1 className="text-4xl sm:text-5xl font-bold">TRAVEL MEMORIES</h1>
          <p className="text-xl mt-2">YOU’LL NEVER FORGET</p>
          <div className="mt-4 text-3xl animate-bounce">⬇️</div>
        </div>
      </div>

      {/* Collage Image + Search */}
      <div className="relative">
        <img
          src={collage}
          alt="Jodhpur Collage"
          className="w-full h-[300px] object-cover"
        />
        <form
          onSubmit={handleSubmit}
          className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[70%] md:w-[50%] bg-white shadow-md rounded-2xl flex flex-col z-10"
        >
          <div className="flex items-center justify-between px-4 py-2">
            <input
              type="text"
              placeholder="Search tourist places..."
              value={query}
              onChange={handleInput}
              className="flex-grow px-2 py-1 text-gray-800 outline-none"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
            >
              🔍
            </button>
          </div>

          {suggestions.length > 0 && (
            <ul className="bg-white border-t border-gray-200 rounded-b-2xl max-h-40 overflow-y-auto">
              {suggestions.map((place, idx) => (
                <li
                  key={idx}
                  onClick={() => handleSelect(place)}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  {place}
                </li>
              ))}
            </ul>
          )}
        </form>
      </div>

      {/* Filter Section */}
      <div className="bg-[#f5f0e1] py-16 px-4 sm:px-8 lg:px-16 relative mt-16">
        <h2 className="text-3xl sm:text-4xl text-orange-700 font-semibold mb-10 text-center">
          Refine Your Jodhpur Experience
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
            <div>
              <label className="block font-medium mb-1">🌐 By Category</label>
              <select className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none">
                <option>All</option>
                <option>Historical</option>
                <option>Religious</option>
                <option>Nature</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">📍 By Distance</label>
              <select className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none">
                <option>Nearest</option>
                <option>Within 5km</option>
                <option>Within 10km</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">💰 By Entry Fee</label>
              <select className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none">
                <option>Free</option>
                <option>Under ₹100</option>
                <option>Above ₹100</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">⏰ By Opening Hours</label>
              <select className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none">
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="block font-medium mb-1">⭐ By Rating</label>
              <select className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none">
                <option>All</option>
                <option>4 Stars & above</option>
                <option>3 Stars & above</option>
              </select>
            </div>

            <div className="sm:col-span-2 text-center">
              <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">
                🔍 Search
              </button>
            </div>
          </div>

          {/* Decorative Image */}
          <div className="flex-1">
            <img
              src={filterDecor}
              alt="Decorative"
              className="w-full max-w-md mx-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Attractions Section */}
      <div className="bg-[#f0f0d8] py-16 px-4 md:px-20">
        <h1 className="text-3xl md:text-4xl text-center font-semibold text-orange-600 mb-10">
          Jodhpur’s Most Popular Attractions
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {attractions.map((item, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-105"
              onClick={() => handleCardClick(item.path)}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-96 object-cover"
              />
              <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md">
                <ArrowRight className="text-gray-700" />
              </div>
              <div className="absolute bottom-3 left-3 text-white text-lg font-bold drop-shadow-lg">
                {item.name}
              </div>
            </div>
          ))}
        </div>
        <Link to="/itinerary">
  <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
    View Itinerary
  </button>
</Link>
      </div>
    </div>
  );
};

export default ExploreJodhpur;
