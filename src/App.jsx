import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { Loader } from 'components/Loader/Loader';

import AboutUs from 'pages/AboutUs/AboutUs';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import Gallery from 'pages/Gallery/Gallery';
import Services from 'pages/Services/Services';
import Contact from 'pages/Contact/Contact';
import Details from 'pages/Details/Details';
import NotFound from 'pages/NotFound/NotFound';

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
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
};
