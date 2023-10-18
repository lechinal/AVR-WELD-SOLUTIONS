import React from 'react';
import Header from './components/Header/Header';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      AVG WELD SOLUTIONS
      <Header />
    </div>
  );
};
