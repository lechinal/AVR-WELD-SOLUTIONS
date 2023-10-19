import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import AboutUs from 'pages/AboutUs/AboutUs';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import Gallery from 'pages/Gallery/Gallery';
import Services from 'pages/Services/Services';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'space-between',
        // alignItems: 'center',

        color: '#010101',
      }}
    >
      <Header />

      <Routes>
        <Route exact path="/" element={<WelcomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>

      <Footer />
    </div>
  );
};
