import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import HamburgerMenuIcon from '../HamburgerMenuIcon/HamburgerMenuIcon';
import CloseHamburgerMenuIcon from '../CloseHamburgerMenuIcon/CloseHamburgerMenuIcon';

import styles from './Header.module.css';
import logoAvrWeld from '../../images/logoAvrWeld.svg';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <section>
      <nav className={styles.nav}>
        <div className={styles.logoBox}>
          <Link to="/" className={styles.logoLink}>
            <img className={styles.logoImg} src={logoAvrWeld} alt="Logo" />
            <h3 className={styles.logoTitle}>
              Montaje și Reparații Tuberie Industrială, Structuri Metalice
            </h3>
          </Link>
        </div>

        <div className={`${styles.listBox} ${isOpen ? '' : styles.hidden}`}>
          <ul className={styles.open}>
            <li className={styles.element}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? `${styles.active} ${styles.noHover}` : ''
                }
                onClick={closeMenu}
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
                onClick={closeMenu}
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
                onClick={closeMenu}
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
                onClick={closeMenu}
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
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </li>
            {isOpen && (
              <div className={styles.closeMobile} onClick={handleClick}>
                <CloseHamburgerMenuIcon />
              </div>
            )}
          </ul>
        </div>
        <div className={styles.mobile} onClick={handleClick}>
          {!isOpen ? <HamburgerMenuIcon /> : null}
        </div>
      </nav>
    </section>
  );
}

export default Header;
