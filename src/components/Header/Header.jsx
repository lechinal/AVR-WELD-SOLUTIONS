import React from 'react';
import Logo from '../Logo/Logo.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <Logo />
      <div className={styles.headerTitleBox}>
        <h1 className={styles.headerTitle}>
          AVR WELD SOLUTIONS
          <h2 className={styles.headerSubTitle}>
            Montaje și Reparații Tuberie Industrială și Structuri Metalice
          </h2>
        </h1>
      </div>
      <Navigation />
    </div>
  );
}

export default Header;
