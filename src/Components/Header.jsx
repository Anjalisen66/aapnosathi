import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-removebg-preview.png";
import flowerDesign from "../assets/untitled.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsServicesOpen(false);
  };

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-[#edeecb] relative top-[-20px]">
      <div className="flex flex-col items-center sm:flex-row sm:justify-between sm:items-center px-6 pt-6 relative z-10">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Apno Sarthi Logo"
            className="h-[100px] sm:h-[130px] object-contain"
          />
        </div>

        {/* Navigation links */}
        <nav
          className="hidden sm:flex space-x-4 text-lg sm:text-xl mt-4 sm:mt-0"
          style={{ fontFamily: "Garamond, serif" }}
        >
          <Link to="/" className="text-primary hover:text-secondary">
            Home
          </Link>
          <div className="relative" ref={servicesRef}>
            <button
              onClick={toggleServicesMenu}
              className="text-primary hover:text-secondary focus:outline-none"
            >
              Services
            </button>
            {isServicesOpen && (
              <div className="absolute left-0 mt-2 bg-[#edeecb] shadow-lg rounded-lg py-2 w-48 z-30">
                <Link
                  to="/accommodation"
                  className="block px-4 py-2 hover:bg-[#693303]"
                  onClick={handleLinkClick}
                >
                  Accommodation
                </Link>
                <Link
                  to="/city-info"
                  className="block px-4 py-2 hover:bg-[#693303]"
                  onClick={handleLinkClick}
                >
                  City Info
                </Link>
                <Link
                  to="/tourist-places"
                  className="block px-4 py-2 hover:bg-[#693303]"
                  onClick={handleLinkClick}
                >
                  Tourist Places
                </Link>
                <Link
                  to="/foodpage"
                  className="block px-4 py-2 hover:bg-[#693303]"
                  onClick={handleLinkClick}
                >
                  Food & Restaurants
                </Link>
                <Link
                  to="/transport"
                  className="block px-4 py-2 hover:bg-[#693303]"
                  onClick={handleLinkClick}
                >
                  Transport
                </Link>
              </div>
            )}
          </div>
          <Link to="/about" className="text-primary hover:text-secondary">
            About Us
          </Link>
          <Link to="/contact" className="text-primary hover:text-secondary">
            Contact Us
          </Link>
          <Link to="/login" className="text-primary hover:text-secondary">
            Login
          </Link>
        </nav>

        {/* Hamburger Icon */}
        <button
          className="sm:hidden flex flex-col space-y-1 cursor-pointer z-20 mt-4"
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          <div className="w-6 h-1 bg-[#693303]"></div>
          <div className="w-6 h-1 bg-[#693303]"></div>
          <div className="w-6 h-1 bg-[#693303]"></div>
        </button>

        {/* Menu for small screens */}
        {isMenuOpen && (
          <div className="sm:hidden absolute top-[120px] right-0 w-full bg-[#edeecb] shadow-md rounded-lg z-30">
            <ul className="flex flex-col space-y-4 text-lg p-4">
              <Link
                to="/"
                className="text-primary hover:text-secondary"
                onClick={handleLinkClick}
              >
                Home
              </Link>

              <li ref={servicesRef}>
                <button
                  onClick={toggleServicesMenu}
                  className="text-primary hover:text-secondary w-full text-left focus:outline-none"
                >
                  Services
                </button>
                {isServicesOpen && (
                  <ul className="bg-white rounded-lg mt-2 p-2">
                    <li>
                      <Link
                        to="/accomodation"
                        className="block hover:bg-[#693303] p-2 rounded"
                      >
                        Accommodation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/city-info"
                        className="block hover:bg-[#693303] p-2 rounded"
                      >
                        City Info
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/food"
                        className="block hover:bg-[#693303] p-2 rounded"
                      >
                        Food & Restaurants
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/transport"
                        className="block hover:bg-[#693303] p-2 rounded"
                      >
                        Transport
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-primary hover:text-secondary"
                  onClick={handleLinkClick}
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-primary hover:text-secondary"
                  onClick={handleLinkClick}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-primary hover:text-secondary
                 onClick={handleLinkClick}"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Decorative border line */}
      <div className="absolute top-[110px] w-full flex justify-between">
        <div className="border-t-2 border-[#693303] w-[50%]"></div>
        <div className="border-t-2 border-[#693303] w-[50%]"></div>
      </div>
    </header>
  );
};

export default Header;
