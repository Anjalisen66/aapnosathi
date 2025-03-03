import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import Overview from './Components/Overview';
import InfoSection from './Components/InfoSection';
import Features from './Components/Features';
import JodhpurGallery from './Components/JodhpurGallery';
import Footer from './Components/Footer';
import Login from './Components/Login';
import ContactUs from './Components/ContactUs';
import TestimonialSlider from './Components/TestimonialSlider';
import ReviewForm from './Components/ReviewForm';
import AboutUs from './Components/AboutUs'; // Import the AboutUs component
import JodhpurRiShaan from './Components/JodhpurRiShaan';
import Why from './Components/Why';
import HexagonGrid from './Components/Hexagongrid';
import SignUp from './Components/SignUp';

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation(); // Get the current route path

  // Check if the current path is the home route or about page
  const isHomeOrAbout = location.pathname === '/' || location.pathname === '/about';

  return (
    <div className="bg-[#edeecb] min-h-screen overflow-x-hidden">
      {/* Conditionally render Header and Footer on home and about routes */}
      {isHomeOrAbout && <Header />}

      {/* Define Routes */}
      <Routes>
        {/* Home Page (default route) */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Overview />
              <InfoSection />
              <Features />
              {/* <JodhpurGallery /> */}
              <JodhpurRiShaan />
              <TestimonialSlider />
            </>
          }
        />

        {/* About Us Page Route */}
        <Route path="/about" element={<AboutUs />} />

        {/* Login Page Route */}
        <Route path="/login" element={<Login />} />

        {/* Contact Us Page Route */}
        <Route path="/contact" element={<ContactUs />} />

        {/* Review Form Route */}
        <Route path="/review" element={<ReviewForm />} />

        {/* <Route path="/gallery" element={<JodhpurRiShaan/>} /> */}

        <Route path="/why" element={<Why/>} />
        <Route path="/honeycomb" element={<HexagonGrid/>} />
        <Route path="/signup" element={<SignUp />} />

      </Routes>

      {/* Conditionally render Footer on home and about routes */}
      {isHomeOrAbout && <Footer />}
    </div>
  );
}

export default App;
