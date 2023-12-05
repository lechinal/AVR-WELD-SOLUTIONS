import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
        <Logo />
      </Link>
      <Navigation />
    </div>
  );
}

export default Header;
