import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaMap,
  FaUniversity,
  FaTrain,
  FaTimes,
} from "react-icons/fa";
import { Pagination } from "./Pagination";

const accommodations = [
  {
    name: "Shivaay Girls PG",
    location: "Sardarpura, Jodhpur",
    price: "₹ 8000/month",
    food: "Food extra",
    image: "/pg1.jpg",
    phone: "9876543210",
    roomOptions: {
      Single: "₹10,400",
      Twin: "₹7,800",
      Triple: "₹5,900",
      Four: "₹5,200",
    },
    description:
      "PG for Girls | CCTV | Wi-Fi | Washing Machine | AC rooms | Parking",
    tag: "Girls",
    distance: {
      university: "0.4 km from Agri University",
      station: "3.2 km from Jodhpur Railway Station",
    },
  },
  {
    name: "Karam Residency, Mandore, Jodhpur",
    location: "Mandore, Jodhpur",
    price: "₹ 2,500/month",
    food: "Food extra",
    image: "/pg2.jpg",
    phone: "9123456780",
    roomOptions: {
      Single: "₹10,400",
      Twin: "₹7,800",
      Triple: "₹5,900",
      Four: "₹5,200",
    },
    description: "Near Market | Secure Area | Shared Kitchen | Balcony Rooms",
    tag: "Girls",
    distance: {
      university: "0.5 km from JNVU",
      station: "2.5 km from Jodhpur Railway Station",
    },
  },
  {
    name: "Bed in a 2 Bhk apartment",
    location: "Paota, Jodhpur",
    price: "₹ 20,000/month",
    food: "Food extra",
    image: "/pg3.jpeg",
    phone: "9123456780",
    roomOptions: {
      Single: "₹9,800",
      Twin: "₹15,500",
    },
    description: "Near Market | Secure Area | Shared Kitchen | Balcony Rooms",
    tag: "Boys",
    distance: {
      university: "0.5 km from JNVU",
      station: "2.5 km from Jodhpur Railway Station",
    },
  },
  {
    name: "Ridhi Sidhi Girls Hostel and P.G Paying Guest/Hostels",
    location: "Paota, Jodhpur",
    price: "₹ 6,500/month",
    food: "Food included",
    image: "/pg4.jpg",
    phone: "9123456780",
    roomOptions: {
      Twin: "₹7,000",
      Triple: "₹6,500",
    },
    description: "Near Market | Secure Area | Shared Kitchen | Balcony Rooms",
    tag: "Girls",
    distance: {
      university: "0.5 km from JNVU",
      station: "2.5 km from Jodhpur Railway Station",
    },
  },
  {
    name: "Mathur Paying Guest Hostel for Boys/Hostels",
    location: "Chopasni Housing Board, Jodhpur",
    price: "₹ 5,500/month",
    food: "Food extra",
    image: "/pg5.jpeg",
    phone: "9123456780",
    roomOptions: {
      Single: "₹6,500",
      Twin: "₹6,000",
      Triple: "₹5,500",
    },
    description: "Near Market | Secure Area | Shared Kitchen | Balcony Rooms",
    tag: "Boys",
    distance: {
      university: "0.5 km from JNVU",
      station: "2.5 km from Jodhpur Railway Station",
    },
  },
  {
    name: "Shri Hari Boys PG Hostel Jodhpur is only for NEET and IIT JEE Students",
    location: "Pal Road, Jodhpur",
    price: "₹2,000/month",
    food: "Food extra",
    image: "/pg6.jpeg",
    phone: "9123456780",
    roomOptions: {
      Single: "₹3,000",
      Twin: "₹2,500",
      Triple: "₹2,000",
    },
    description: "Near Market | Secure Area | Shared Kitchen | Balcony Rooms",
    tag: "Boys",
    distance: {
      university: "0.5 km from JNVU",
      station: "2.5 km from Jodhpur Railway Station",
    },
  },
  // Add more PGs as needed
];

const Accommodation = () => {
  const [selectedPhone, setSelectedPhone] = useState(null);

  const openPhoneModal = (phone) => {
    setSelectedPhone(phone);
  };

  const closePhoneModal = () => {
    setSelectedPhone(null);
  };

  return (
    <div className="min-h-screen bg-[#edeecb] font-serif text-[#693303] border-[10px] border-[#c89e6e] px-6 py-10 relative">
      {/* Decorative Corners */}
      {[
        "top-0 left-0",
        "top-0 right-0",
        "bottom-0 left-0",
        "bottom-0 right-0",
      ].map((pos, i) => (
        <div
          key={i}
          className={`absolute w-12 h-12 bg-no-repeat bg-contain ${pos}`}
          style={{ backgroundImage: "url('/corner.png')" }}
        />
      ))}

      {/* Header Image */}
      <img
        src="/jodh.jpeg"
        alt="Banner"
        className="w-full h-64 object-cover border border-[#edeecb]"
      />

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mt-8">
        Accommodation in Jodhpur
      </h1>
      <p className="text-center text-lg mt-3 max-w-2xl mx-auto">
        Find Paying Guest (PG) accommodations and rooms for rent in Jodhpur with
        a blend of traditional and modern living options.
      </p>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <select className="px-4 py-2 border border-[#652d0e] rounded bg-[#f9e8d2]">
          <option>Budget</option>
          <option>₹ Min</option>
          <option>₹ 4000</option>
          <option>₹ 6000</option>
          <option>₹ 8000</option>
          <option>₹ 10000</option>
          <option>₹ 12000</option>
          <option>₹ 15000</option>
          <option>₹ 20000</option>
        </select>
        <select className="px-4 py-2 border border-[#652d0e] rounded bg-[#f9e8d2]">
          <option>Occupancy</option>
          <option>Single</option>
          <option>Double</option>
          <option>Triple</option>
          <option>Others</option>
        </select>
        <select className="px-4 py-2 border border-[#652d0e] rounded bg-[#f9e8d2]">
          <option>Boys/Girls</option>
          <option>Boys</option>
          <option>Girls</option>
          <option>Both</option>
        </select>
        <button className="px-5 py-2 bg-[#652d0e] text-white rounded hover:bg-[#b98a5d]">
          Filter
        </button>
      </div>

      {/* PG Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
        {accommodations.map((pg, idx) => (
          <div
            key={idx}
            className="bg-white rounded-md shadow-md overflow-hidden border border-[#652d0e]"
          >
            <div className="relative">
              <img
                src={pg.image}
                alt={pg.name}
                className="w-full h-52 object-cover"
              />
              <span className="absolute top-2 left-2 bg-pink-600 text-white text-xs px-3 py-1 rounded-full">
                {pg.tag}
              </span>
              <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                + Photos
              </span>
            </div>

            <div className="p-4 space-y-2">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">{pg.name}</h2>
                <p className="text-sm text-[#f9e8d2] bg-[#652d0e] px-2 py-1 rounded border border-[#652d0e]">
                  {pg.price}
                </p>
              </div>

              <p className="text-sm text-gray-700 flex items-center gap-1">
                <FaMapMarkerAlt /> {pg.location}
              </p>

              <p className="text-xs text-gray-600 italic">{pg.food}</p>

              {/* Room Options */}
              <div className="grid grid-cols-2 text-sm gap-2 mt-2">
                {Object.entries(pg.roomOptions).map(([type, price]) => (
                  <div
                    key={type}
                    className="flex justify-between border-b border-dashed border-gray-300"
                  >
                    <span>{type} Sharing</span>
                    <span>{price}</span>
                  </div>
                ))}
              </div>

              {/* Description */}
              <p className="text-sm mt-2 text-gray-700 line-clamp-2">
                {pg.description}
              </p>

              {/* Distance */}
              <div className="flex flex-col text-xs text-gray-600 mt-2 space-y-1">
                <span className="flex items-center gap-2">
                  <FaUniversity /> {pg.distance.university}
                </span>
                <span className="flex items-center gap-2">
                  <FaTrain /> {pg.distance.station}
                </span>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-2 mt-4">
                <button
                  onClick={() => openPhoneModal(pg.phone)}
                  className="flex-1 text-sm border border-[#652d0e] text-[#693303] py-1 rounded hover:bg-[#f5d6a4]"
                >
                  <FaPhone className="inline mr-1" /> View Phone No.
                </button>
                <button className="flex-1 text-sm border border-[#652d0e] text-[#693303] py-1 rounded hover:bg-[#f5d6a4]">
                  Contact Owner
                </button>
                <button className="flex-1 text-sm border border-[#652d0e] text-[#693303] py-1 rounded hover:bg-[#f5d6a4]">
                  <FaMap className="inline mr-1" /> View on Map
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Phone Modal */}
      {selectedPhone && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80 relative border border-[#c89e6e]">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
              onClick={closePhoneModal}
            >
              <FaTimes />
            </button>
            <h2 className="text-xl font-bold mb-4">Phone Number</h2>
            <p className="text-lg font-mono text-[#693303]">{selectedPhone}</p>
            <button
              onClick={closePhoneModal}
              className="mt-4 px-4 py-2 bg-[#c89e6e] text-white rounded hover:bg-[#b98a5d]"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <Pagination />
    </div>
  );
};

export default Accommodation;
