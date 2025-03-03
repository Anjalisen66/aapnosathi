import React from 'react';
import { FaHotel, FaBus, FaUtensils, FaInfoCircle } from 'react-icons/fa';

const features = [
  { icon: <FaInfoCircle size={70} />, label: "CITY INFO" },
  { icon: <FaHotel size={70} />, label: "ACCOMMODATION" },
  { icon: <FaBus size={70} />, label: "TRANSPORT" },
  { icon: <FaUtensils size={70} />, label: "FOOD & RESTAURANT" }
];

const Features = () => {
  return (
    <section className="bg-[#edeecb] pt-10 lg:pt-20 m-10  items-start sm:items-center justify-start sm:gap-8" style={{ fontFamily: 'Garamond, serif' }}>
      {/* Heading aligned to the left */}
      <h2 className="text-[#de5c0a] text-3xl sm:text-4xl font-bold mb-10 sm:mb-0 w-full sm:w-auto ">
        FEATURES
      </h2>

      {/* Features Section */}
      
      <div className="w-full flex flex-wrap justify-start gap-10 sm:gap-8 mt-2 w-full flex flex-col sm:flex-row py-5 px-10">
        {features.map((feature, index) => (
          <div key={index} className="text-left transform transition-transform duration-500 hover:-translate-y-2 w-[220px] sm:w-[250px]">
            <div className="text-[#e98c14] mb-4 flex justify-center">{feature.icon}</div>
            <p className="text-xl font-bold text-[#e98c14] text-center">{feature.label}</p>
          </div>
          
        ))}
      </div>
      
    </section>
  );
};

export default Features;
