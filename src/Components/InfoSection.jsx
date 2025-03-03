import React from 'react';
import mehrangarh from '../assets/mehrangarh-fort-jodhpur.jpg';
import umaidBhawan from '../assets/56873738.jpg';

const InfoSection = () => {
  return (
    <section className="bg-[#edeecb] py-6 px-4">
      <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-10">
        
        {/* Image Section */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <img
            src={mehrangarh}
            alt="Mehrangarh Fort"
            className="w-[80%] sm:w-[70%] lg:w-[65%] h-auto object-cover rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] transition-transform transform hover:scale-105"
          />
          <img
            src={umaidBhawan}
            alt="Umaid Bhawan"
            className="absolute top-[150px] sm:top-[140px] lg:top-[200px] left-[50%] sm:left-[40%] lg:left-[30%] transform -translate-x-1/2 w-[70%] sm:w-[60%] lg:w-[45%] h-auto rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] shadow-lg transition-transform hover:scale-105"
          />
        </div>
        
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-left">
          <p
            className="text-gray-800 text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed indent-8 sm:indent-12 lg:indent-16 pr-4 sm:pr-8 lg:pr-20 text-justify"
            style={{ fontFamily: 'Garamond, serif' }}
          >
            <b>Jodhpur</b> is a <b>city in the Thar Desert</b> of the northwest Indian <b>state of Rajasthan</b>. Its <b>15th-century Mehrangarh Fort</b> is a former palace that’s now a museum, displaying weapons, paintings, and elaborate royal palanquins (sedan chairs). Set on a rocky outcrop, the fort overlooks the walled city, where many buildings are painted the city’s iconic shade of blue. Jodhpur, <b>also known as the "Blue City"</b>, is famed for its vibrant blue-painted houses that create a striking contrast against the golden sands of the Thar Desert. The city is a cultural hub, offering a rich tapestry of Rajasthani traditions, bustling bazaars, and exquisite handicrafts. Its timeless charm makes it a popular destination for history enthusiasts and travelers alike.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
