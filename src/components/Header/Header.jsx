import React from 'react';
import Logo from '../Logo/Logo.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.headerBox}>
      <Logo />
      <h1>AVR WELD SOLUTIONS</h1>
      <Navigation />
    </div>
  );
}

export default Header;
