import React from "react";

// --- FoodPage Component ---
const FoodPage = () => {
  const restaurants = [
    {
      name: "INDIGO RESTAURANT",
      type: "Veg",
      area: "Indian, Grill",
      location:
        "Roof Top Gouri Haveli Near Clock Tower Rd, Jodhpur 342001 India",
      rating: "4.2",
      img: "wonderful-view-from-roof.jpg",
    },
    {
      name: "Sholla",
      type: "Veg - Non-Vegetarian",
      area: "Indian, Grill",
      location:
        "53, Uchiyarda Road Near Euro International School, Welcomhotel By Itc Hotels, Jodhpur 342027 India",
      rating: "4.5",
      img: "the-word-sholla-is-derived.jpg",
    },
    {
      name: "The Recipe Restaurant",
      type: "Veg",
      area: "Chinese, Indian",
      location:
        "58 Residency Road opposite S N medical college near Goyal hospital, Jodhpur 342003 India",
      rating: "4.4",
      img: "the-recipe-best-vegetarian.jpg",
    },
    {
      name: "Dev Kothi Roof Top Restaurant",
      type: "Veg",
      area: "Indian, Asian",
      location:
        "Killi Khana, Near Shiv Mandir at Dev Kothi Boutique Heritage Home Stay, Jodhpur 342002 India",
      rating: "4.9",
      img: "dev-kothi-roof-top-restaurant.jpg",
    },
    {
      name: "Indique Restaurant & Bar",
      type: "Non-Vegetarian",
      area: "Indian, Asian",
      location:
        "Hotel Pal Haveli Near Clock Tower, Gulab Sagar, Jodhpur 342001 India",
      rating: "4.3",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/35/5f/c0/outdoor.jpg?w=1100&h=600&s=1",
    },
    {
      name: "Cafe Laalten",
      type: "Non-Vegetarian",
      area: "Chinese, Indian",
      location:
        "Inside Pol, Opp Balaji Temple, Near Sadar Haveli, Jodhpur 342001 India",
      rating: "5.0",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/45/81/61/cafe-laalten-rooftop.jpg?w=1100&h=600&s=1",
    },
  ];

  return (
    <div className="text-[#793319] min-h-screen p-6 style={{ fontFamily: 'Garamond, serif' }}">
      {/* Top Heading */}
      <div className="flex flex-col md:flex-row items-center justify-center mb-10 gap-6 relative">
        <h1 className="text-4xl md:text-5xl text-[#de5c0a] font-bold text-center p-4">
          Jodhpur’s Flavours – From Streets to Royals
        </h1>
        <img src="camelImage.png" alt="Camel" className="w-40 h-40" />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <select className="border-2 border-darkbrown rounded-md p-2 bg-beige text-darkbrown">
          <option>Veg</option>
          <option>Non-Veg</option>
        </select>
        <select className="border-2 border-darkbrown rounded-md p-2 bg-beige text-darkbrown">
          <option>₹</option>
          <option>₹₹</option>
          <option>₹₹₹</option>
          <option>₹₹₹₹</option>
        </select>
        <select className="border-2 border-darkbrown rounded-md p-2 bg-beige text-darkbrown">
          <option>All Areas</option>
          <option>Clock Tower</option>
          <option>Sardarpura</option>
          <option>Ratanada</option>
        </select>
      </div>

      {/* Restaurants Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {restaurants.map((res, index) => (
          <div
            key={index}
            className="border-2 border-darkbrown rounded-lg overflow-hidden shadow-md bg-white"
          >
            <img
              src={res.img}
              alt={res.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-darkbrown">
              <h2 className="text-xl font-semibold">{res.name}</h2>
              <p className="text-sm">
                {res.type} • {res.area}
              </p>
              <p className="text-sm mt-1">{res.location}</p>
              <p className="mt-2">⭐ {res.rating}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Local Cuisine Section */}
      <div className="mt-16 px-6">
        <h2 className="text-3xl text-[#de5c0a] font-bold text-center text-darkbrown mb-6">
          Local Cuisine
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-darkbrown">
          {/* Each dish */}
          {[
            {
              img: "दाल_बाटी_चूरमा-removebg-preview.png",
              name: <p className="text-[#de5c0a]">Dal Baati Churma</p>,
              desc: <p className="text-[#793319]">Dal Bati Churma is probably the most common dish in the Marwar area of Rajasthan. Tasted in several places.</p>,
            },
            {
              img: "mirchi_bada-removebg-preview.png",
              name: <p className="text-[#de5c0a]">Mirchi Bada</p>,
              desc: <p className="text-[#793319]">Mirchi Vada, a deep fried pastry stuffed with green chilly and cauliflower. Special aroma!</p>,
            },
            {
              img: "mawa_kachori-removebg-preview.png",
              name: <p className="text-[#de5c0a]">Mawa Kachori</p>,
              desc: <p className="text-[#793319]">A sweet kachori stuffed with mawa and dry fruits, deep-fried and dipped in sugar syrup.</p>,
            },
            {
              img: "Pyaaz-Kachori-1-removebg-preview.png",
              name: <p className="text-[#de5c0a]">Pyaaz Kachori</p>,
              desc: <p className="text-[#793319]">A spicy onion-stuffed flaky deep-fried pastry. Best enjoyed with chutney.</p>,
            },
          ].map((dish, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <img
                src={dish.img}
                alt={dish.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold">{dish.name}</h3>
                <p className="text-sm mt-2">{dish.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- RecommendedPlaces Component ---
const RecommendedPlaces = () => {
  const places = [
    {
      name: "Shri Mishrilal Hotel",
      type: "Famous for Makhaniya Lassi near Clock Tower.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRioT4u7WcWvBMann2l7t5oMBFzttUOvCVKGw&s",
    },
    {
      name: "Janta Sweet Home",
      type: "For Mirchi Bada, Pyaaz Kachori, sweets.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeNYFUs2g9j2ibUHdhWC2AsbdRgn73KaA6iA&s",
    },
    {
      name: "Gypsy Dining Hall",
      type: "For authentic Rajasthani thali experience.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz-2RFxqQK8KBL2GLOWg9S8y-jxdNypqoMjQ&s",
    },
    {
      name: "On The Rocks",
      type: "Popular restaurant with a garden setting.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3KnW6CEIUjLuj-Wmwv8pqCluzvKSxnxcBKA&s",
    },
  ];

  return (
    <div className="min-h-screen bg-[#edeecb] flex flex-col items-center py-10 px-4 style={{ fontFamily: 'Garamond, serif' }}">
      <h1 className="text-4xl font-bold text-[#de5c0a] mb-6 text-center">
        Recommended <br /> Places
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 max-w-5xl">
        {places.map((place, index) => (
          <div
            key={index}
            className="bg-[#f7f0e5] rounded-2xl shadow-md overflow-hidden border p-4"
          >
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-48 object-cover rounded-xl"
            />
            <div className="mt-4 text-center">
              <h2 className="text-xl font-semibold text-[#6b4226]">
                {place.name}
              </h2>
              <p className="text-[#6b4226] mt-2">{place.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Main Page Combining Both ---
const FoodAndPlacesPage = () => {
  return (
    <div>
      <FoodPage />
      <RecommendedPlaces />
    </div>
  );
};

export default FoodAndPlacesPage;
