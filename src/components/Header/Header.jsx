import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import HamburgerMenuIcon from '../HamburgerMenuIcon/HamburgerMenuIcon';
import CloseHamburgerMenuIcon from '../CloseHamburgerMenuIcon/CloseHamburgerMenuIcon';

import styles from './Header.module.css';
import logoImgMic from '../../images/logoImgMic.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={styles.nav}>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <img
            className={styles.logoImg}
            src={logoImgMic}
            alt="Logo"
            width="140"
            height="100"
          />
          <h3 className={styles.logoTitle}>
            Montaje și Reparații Tuberie Industrială, Structuri Metalice
          </h3>
        </Link>

        <div className={`${styles.listBox} ${isOpen ? '' : styles.hidden}`}>
          <ul className={styles.open}>
            <li className={styles.element}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? `${styles.active} ${styles.noHover}` : ''
                }
              >
                Home
              </NavLink>
            </li>

            <li className={styles.element}>
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.active} ${styles.noHover}`
                    : styles.navButton
                }
              >
                About Us
              </NavLink>
            </li>

            <li className={styles.element}>
              <NavLink
                to="/Services"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.active} ${styles.noHover}`
                    : styles.navButton
                }
              >
                Services
              </NavLink>
            </li>

            <li className={styles.element}>
              <NavLink
                to="/Gallery"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.active} ${styles.noHover}`
                    : styles.navButton
                }
              >
                Gallery
              </NavLink>
            </li>

            <li className={styles.element}>
              <NavLink
                to="/Contact"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.active} ${styles.noHover}`
                    : styles.navButton
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.mobile} onClick={handleClick}>
          {isOpen ? <CloseHamburgerMenuIcon /> : <HamburgerMenuIcon />}
          {/* <HamburgerMenuIcon />
          <CloseHamburgerMenuIcon /> */}
        </div>
      </nav>
    </>
  );
}

export default Header;
