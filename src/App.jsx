import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { Loader } from 'components/Loader/Loader';

const WelcomePage = lazy(() => import('pages/WelcomePage/WelcomePage'));
const AboutUs = lazy(() => import('pages/AboutUs/AboutUs'));
const Gallery = lazy(() => import('pages/Gallery/Gallery'));
const Services = lazy(() => import('pages/Services/Services'));
const Contact = lazy(() => import('pages/Contact/Contact'));
const Details = lazy(() => import('pages/Details/Details'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

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
