import React from 'react';
import { FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import flowerDesign from '../assets/Mediamodifier-Design-Template-removebg-preview.png'
import logo from "../assets/logo-removebg-preview.png"

const Footer = () => {
  return (
    <footer className="bg-[#edeecb] text-[#7a3b1c] p-8 md:p-12" style={{ fontFamily: 'Garamond, serif', position: 'relative' }}>
      
      {/* Thin line at the top of the footer */}
      <div className="border-t-4 border-[#de5c0a] absolute left-0 right-0 top-0 mb-8"></div>  {/* Full-width border */}
      
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        
        {/* Left Section with Logo */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <img 
            src={logo}  // Replace with your actual logo path
            alt="Aapno Sathi Logo"
            className="w-[200px] h-[200px] md:w-40 md:h-40 mb-4"  // Increased logo size for larger screens
          />
          
          <p className="text-lg font-bold">Contact Us</p>
          <p className="text-md font-bold mt-2">aapnosathi@gmail.com</p>
        </div>
        
        {/* Center Section */}
        <div className="text-center md:text-left" style={{ fontFamily: 'Garamond, serif' }}>
          <h3 className="text-xl font-bold mb-4">Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:underline font-bold">Home</a></li>
            <li><a href="#about" className="hover:underline font-bold">About Us</a></li>
            <li><a href="#city" className="hover:underline font-bold">About City</a></li>
            <li><a href="#services" className="hover:underline font-bold">Services</a></li>
          </ul>
        </div>

        {/* Center Design (Hidden on Mobile) */}
        <div className="hidden md:block" style={{ fontFamily: 'Garamond, serif' }}>
          <img 
            src={flowerDesign}  // Replace with your actual path
            alt="Decorative Design"
            className="w-48 h-48 opacity-40"  // Increased size and changed opacity for subtle effect
          />
        </div>

        {/* Right Section shifted left */}
        <div className="text-center md:text-left" style={{ fontFamily: 'Garamond, serif' }}>
          <h3 className="text-xl font-bold mb-4">Get Help</h3>
          <ul className="space-y-2 text-center md:text-left">
            <li><a href="#faq" className="hover:underline font-bold">FAQ</a></li>
            <li><a href="#seo" className="hover:underline font-bold">SEO</a></li>
            <li><a href="#terms" className="hover:underline font-bold">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Media (on mobile, icons go below text) */}
        <div className="flex flex-col items-center md:items-start md:flex-row space-x-6 mt-4 md:mt-0">
          <h3 className="text-xl font-bold mb-4 md:mb-0">Contact Us On</h3>
          
          <div className="flex flex-col items-center space-y-4 mt-2 md:mt-0"> {/* Stacked icons on mobile */}
            <a href="#" className="text-4xl hover:text-[#de5c0a] transition-all">
              <FaInstagram />
            </a>
            <a href="#" className="text-4xl hover:text-[#de5c0a] transition-all">
              <FaYoutube />
            </a>
            <a href="#" className="text-4xl hover:text-[#de5c0a] transition-all">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section (Positioned correctly at the bottom-left) */}
      <div className="absolute bottom-4 left-4 text-sm text-[#7a3b1c]">
        <p>&copy; 2024 AapnoSathi</p>
      </div>
    </footer>
  );
};

export default Footer;
