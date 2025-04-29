// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css'; // Swiper core styles
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import girlImage from '../assets/girl.png';
// import amitImage from '../assets/pexels-varunkgaba-7437945.jpg';
// import priyaImage from '../assets/pexels-ashvini-bmr-285129-7444892.jpg';
// import rohanImage from '../assets/pexels-absoluteabhi-5718614.jpg';

// const testimonials = [
//   {
//     id: 1,
//     name: 'Juhi Harsh',
//     image: girlImage,
//     review: 'Empowering students to navigate the city with ease...',
//   },
//   {
//     id: 2,
//     name: 'Amit Verma',
//     image: amitImage,
//     review: 'An invaluable guide for exploring Jodhpur!',
//   },
//   {
//     id: 3,
//     name: 'Priya Sharma',
//     image: priyaImage,
//     review: 'A must-have resource for newcomers to Jodhpur!',
//   },
//   {
//     id: 4,
//     name: 'Rohan Singh',
//     image: rohanImage,
//     review: 'Simply brilliant! Highly recommended.',
//   },
// ];

// const TestimonialSlider = () => {
//   const [ratings, setRatings] = useState({}); // Store ratings for each testimonial

//   const handleStarClick = (id, star) => {
//     setRatings((prevRatings) => ({
//       ...prevRatings,
//       [id]: star,
//     }));
//   };

//   return (
//     <div
//       className="py-10 px-4 lg:px-20 bg-cover bg-center"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//       }}
//     >
//       {/* Section Title */}
//       <section className="p-10">
//         <h2
//           className="text-[#eddecb] text-3xl sm:text-4xl font-bold mb-5"
//           style={{ fontFamily: 'Garamond, serif' }}
//         >
//           TESTIMONIALS
//         </h2>
//       </section>

//       {/* Swiper Slider */}
//       <Swiper
//         modules={[Navigation, Pagination]}
//         spaceBetween={30}
//         slidesPerView={1}
//         navigation={{
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//         }}
//         pagination={{ clickable: true }}
//         className="max-w-6xl mx-auto"
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//       >
//         {testimonials.map((testimonial) => (
//           <SwiperSlide key={testimonial.id}>
//             <div
//               className="bg-[#45260a]/80 rounded-[30px] p-6 shadow-lg text-[#edeecb] text-center relative transform transition-transform duration-300 hover:scale-105"
//             >
//               <img
//                 src={testimonial.image}
//                 alt={testimonial.name}
//                 className="w-20 h-20 rounded-full mx-auto mb-4"
//               />
//               <h3 className="text-xl sm:text-2xl font-semibold">{testimonial.name}</h3>
//               <p className="mt-4 text-sm sm:text-lg text-[#edeecb]">{testimonial.review}</p>

//               {/* Clickable Stars */}
//               <div className="flex justify-center mt-4 space-x-2">
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <span
//                     key={star}
//                     onClick={() => handleStarClick(testimonial.id, star)}
//                     className={`cursor-pointer text-3xl ${
//                       star <= (ratings[testimonial.id] || 0)
//                         ? 'text-yellow-500'
//                         : 'text-[#b27409]'
//                     }`}
//                   >
//                     ★
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Custom Navigation Buttons */}
//       <div className="swiper-button-next  text-[#eddecb] hover:text-yellow-400 !right-0 lg:!right-10"></div>
//       <div className="swiper-button-prev text-[#eddecb] hover:text-yellow-400 !left-0 lg:!left-10"></div>
//     </div>
//   );
// };

// export default TestimonialSlider;







import React, { useState } from 'react';
import './Testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import girlImage from '../assets/girl.png';
import amitImage from '../assets/pexels-varunkgaba-7437945.jpg';
import priyaImage from '../assets/pexels-ashvini-bmr-285129-7444892.jpg';
import rohanImage from '../assets/pexels-absoluteabhi-5718614.jpg';
import backgroundImage from '../assets/testimonials.png'; 





const testimonials = [
  {
    id: 1,
    name: 'Juhi Harsh',
    image: girlImage,
    review: 'Empowering students to navigate the city with ease...',
  },
  {
    id: 2,
    name: 'Amit Verma',
    image: amitImage,
    review: 'An invaluable guide for exploring Jodhpur!',
  },
  {
    id: 3,
    name: 'Priya Sharma',
    image: priyaImage,
    review: 'A must-have resource for newcomers to Jodhpur!',
  },
  {
    id: 4,
    name: 'Rohan Singh',
    image: rohanImage,
    review: 'Simply brilliant! Highly recommended.',
  },
];

const TestimonialSlider = () => {
  const [ratings, setRatings] = useState({});

  const handleStarClick = (id, star) => {
    setRatings((prev) => ({ ...prev, [id]: star }));
  };

  const renderStars = (id) => {
    const currentRating = ratings[id] || 5;
    return (
      <div className="flex gap-1 mt-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            onClick={() => handleStarClick(id, star)}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill={star <= currentRating ? '#b27409' : '#edeecb'}
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <path d="M10 .8l2.58 6.7h7.06l-5.7 4.2 2.2 6.7-5.86-4.26L4.9 18.4l2.2-6.7-5.7-4.2h7.06L10 .8z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div
      className="py-10 px-4 lg:px-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1
        className="text-3xl md:text-4xl font-semibold text-[#edeecb] text-center"
        style={{ fontFamily: 'Garamond, serif' }}
      >
        What Our Students Say
      </h1>
      <p
        className="text-sm md:text-base text-[#edeecb] text-center mt-4 mb-10 font-semibold"
        style={{ fontFamily: 'Garamond, serif' }}
      >
        Join thousands of successful students who transformed their careers with us
      </p>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        className="max-w-3xl mx-auto"
      >
        {testimonials.map(({ id, name, image, review }) => (
          <SwiperSlide key={id}>
            <div className="bg-[#45260a]/80 shadow-lg rounded-lg p-6 flex flex-col items-center">
              <img src={image} alt={name} className="w-24 h-24 rounded-full object-cover mb-4" />
              <p
                className="text-[#edeecb] text-center italic mb-2"
                style={{ fontFamily: 'Garamond, serif' }}
              >
                "{review}"
              </p>
              <h3
                className="text-lg font-semibold text-[#edeecb]"
                style={{ fontFamily: 'Garamond, serif' }}
              >
                {name}
              </h3>
              {renderStars(id)}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
 
  );
};

export default TestimonialSlider;
