import React, { useState } from "react";

// Sample data for 3-day itinerary
const sections3Day = [
  {
    time: "Day 1 - Morning (8:00 AM - 11:00 AM)",
    title: "Mehrangarh Fort",
    description: [
      "The crown jewel of Jodhpur!",
      "Entry Fee: ₹100 (Students ₹50 with valid ID)",
      "DSLR Fee ₹100 (for enthusiasts)",
      "Tip: Visit early to enjoy the views and cooler temps!"
    ],
    // icon: itineraryIcon,
  },
  {
    time: "Day 1 - Brunch (11:30 AM - 12:30 PM)",
    title: "Local Delights",
    description: [
      "Shahi Samosa | Chaturbhuj Laddu",
      "Mishrilal Lassi",
      "Clock Tower area",
      "Cost: ₹150-200 approx"
    ],
    // icon: itineraryIcon,
  },
  {
    time: "Day 2 - Morning (8:00 AM - 11:00 AM)",
    title: "Jaswant Thada & Umaid Bhawan Palace",
    description: [
      "Jaswant Thada: A royal memorial",
      "Umaid Bhawan Palace: A glimpse of grandeur",
      "Entry Fee: ₹30 | ₹60",
      "Auto to Umaid Bhawan from Jaswant Thada"
    ],
    // icon: itineraryIcon,
  },
  {
    time: "Day 2 - Afternoon (1:00 PM - 3:00 PM)",
    title: "Clock Tower & Sardar Market",
    description: [
      "Ghanta Ghar (Clock Tower) & Sardar Market",
      "Shop: Spices, Jodhpuri Juttis & Souvenirs",
      "Try: Omelette Shop (famous street food)",
      "Cost: ₹200-300 shopping range"
    ],
    // icon: itineraryIcon,
  },
  {
    time: "Day 3 - Morning (8:00 AM - 11:00 AM)",
    title: "Toorji Ka Jhalra & Rooftop Café",
    description: [
      "Toorji Ka Jhalra Stepwell",
      "Dinner: Stepwell Café / Nirvana / Indique",
      "Tip: Go for candlelight rooftop view!",
      "Cost: ₹300-500 per meal"
    ],
    // icon: itineraryIcon,
  },
];

const sections1Day = [
  {
    time: "Morning (8:00 AM - 11:00 AM)",
    title: "Mehrangarh Fort",
    description: [
      "The crown jewel of Jodhpur!",
      "Entry Fee: ₹100 (Students ₹50 with valid ID)",
      "DSLR Fee ₹100 (for enthusiasts)",
      "Tip: Visit early to enjoy the views and cooler temps!"
    ],
    // icon: itineraryIcon,
  },
  {
    time: "Brunch (11:30 AM - 12:30 PM)",
    title: "Local Delights",
    description: [
      "Shahi Samosa | Chaturbhuj Laddu",
      "Mishrilal Lassi",
      "Clock Tower area",
      "Cost: ₹150-200 approx"
    ],
    // icon: itineraryIcon,
  },
  {
    time: "Afternoon (1:00 PM - 3:00 PM)",
    title: "Jaswant Thada & Umaid Bhawan Palace",
    description: [
      "Jaswant Thada: A royal memorial",
      "Umaid Bhawan Palace: A glimpse of grandeur",
      "Entry Fee: ₹30 | ₹60",
      "Auto to Umaid Bhawan from Jaswant Thada"
    ],
    // icon: itineraryIcon,
  },
  {
    time: "Evening (5:00 PM - 6:30 PM)",
    title: "Clock Tower & Sardar Market",
    description: [
      "Ghanta Ghar (Clock Tower) & Sardar Market",
      "Shop: Spices, Jodhpuri Juttis & Souvenirs",
      "Try: Omelette Shop (famous street food)",
      "Cost: ₹200-300 shopping range"
    ],
    // icon: itineraryIcon,
  },
  {
    time: "Sunset & Dinner (6:30 PM - 8:00 PM)",
    title: "Toorji Ka Jhalra & Rooftop Café",
    description: [
      "Toorji Ka Jhalra Stepwell",
      "Dinner: Stepwell Café / Nirvana / Indique",
      "Tip: Go for candlelight rooftop view!",
      "Cost: ₹300-500 per meal"
    ],
    // icon: itineraryIcon,
  }
];

const ItineraryPage = () => {
  const [selectedItinerary, setSelectedItinerary] = useState(1); // 1 for 1-day itinerary, 2 for 3-day itinerary

  const sectionsToDisplay = selectedItinerary === 1 ? sections1Day : sections3Day;

  return (
    <div className="bg-[#f9f8dc] min-h-screen font-serif text-[#502b1d]">
      {/* Header */}
      <div className="relative">
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-30">
          <h2 className="text-2xl font-bold">1 DAY</h2>
          
          <h1 className="text-4xl font-extrabold italic drop-shadow-md ">Jodhpur Itinerary</h1>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mt-2 border-t border-b border-orange-200">
        <button
          className="px-4 py-2 font-semibold border-r"
          onClick={() => setSelectedItinerary(1)}
        >
          1 Day Itinerary
        </button>
        <button
          className="px-4 py-2 font-semibold"
          onClick={() => setSelectedItinerary(2)}
        >
          3 Day Itinerary
        </button>
      </div>
     

      {/* Itinerary Sections */}
      <div className="max-w-4xl mx-auto py-10 px-5 space-y-10">
        {sectionsToDisplay.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <img
              src={item.icon}
              alt="icon"
              className="w-20 h-20 rounded-full object-cover border-2 border-orange-200"
            />
            <div>
              <h3 className="text-lg font-bold text-[#d94e17]">
                {item.time} - {item.title}
              </h3>
              <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                {item.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <div className="text-sm text-center text-red-700 mt-6">
          🌟 Final Tip: Catch a night train or bus back if you're on a weekend trip!
        </div>
      </div>
    </div>
  );
};

export default ItineraryPage;
