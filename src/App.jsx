import React from 'react';

import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Services from './components/Services/Services';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        marginTop: '190px',
        color: '#010101',
      }}
    >
      <Header />
      <AboutUs />
      <Services />
      <Gallery />
      <Footer />
    </div>
  );
};
