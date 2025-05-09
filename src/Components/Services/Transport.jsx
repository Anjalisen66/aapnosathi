import React from "react";

const Transport = () => {
  return (
    <div className="bg-[#edeecb] font-serif">
      {/* Header Section
      <div className="bg-yellow-100 border-b-4 border-yellow-300 p-4">
        <h1 className="text-center text-4xl text-[#de5c0a] font-bold text-brown-800">Transport in Jodhpur</h1>
      </div> */}

      {/* Image Section */}
      <div className="flex justify-center mt-1 mb-4 ">
        <img
          src="20250428_1025_बस ऑटो रोड दृश्य_simple_compose_01jsxbx98zfx08nf3ahtc3qna7.png"
          alt="Transport in Jodhpur"
          className="w-full max-w-6xl h-auto rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Subtext */}
      <div className="text-center mt-6">
        <p className="text-lg text-gray-700 font-medium">
          View schedules and routes for local buses and autos in Jodhpur.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid md:grid-cols-3 gap-6 px-8 mt-10 mb-12 text-[#793319]">
        {/* Bus Card */}
        <div className="border-2 border-yellow-300 bg-white p-6 rounded-xl text-center shadow-md ">
          <div className="text-5xl mb-4">🚌</div>
          <h2 className="text-2xl font-semibold text-brown-800 mb-2">Buses</h2>
          <p className="text-gray-600 mb-4">
            Route 5<br />
            8:00 AM – 8:00 PM
            <br />
            Paota to Ratanada
            <br />
            ₹15
          </p>
          <button className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-white px-5 py-2 rounded-full">
            View Details
          </button>
        </div>

        {/* Auto Card */}
        <div className="border-2 border-yellow-300 bg-white p-6 rounded-xl text-center shadow-md">
          <div className="text-5xl mb-4">🚖</div>
          <h2 className="text-2xl font-semibold text-brown-800 mb-2">Autos</h2>
          <p className="text-gray-600 mb-4">
            Timing
            <br />
            6:00 AM – 10:00 PM
            <br />
            Clock Tower to Railway Station
            <br />
            Approx. Fare
          </p>
          <button className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-white px-5 py-2 rounded-full">
            View Details
          </button>
        </div>

        {/* Shared Cabs Card */}
        <div className="border-2 border-yellow-300 bg-white p-6 rounded-xl text-center shadow-md">
          <div className="text-5xl mb-4">🚕</div>
          <h2 className="text-2xl font-semibold text-brown-800 mb-2">
            Shared Cabs
          </h2>
          <p className="text-gray-600 mb-4">
            Route B<br />
            7:30 AM – 3:50 PM
            <br />
            Nai Sarak to Mandore
            <br />
            Approx. ₹30
          </p>
          <button className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-white px-5 py-2 rounded-full">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Transport;
