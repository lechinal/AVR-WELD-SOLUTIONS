import React from 'react';
import { NavLink } from 'react-router-dom';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={styles.nav}>
      <ButtonGroup
        variant="text"
        color="primary"
        aria-label="navigation buttons"
        sx={{ height: '40px' }}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.active} ${styles.noHover}` : ''
          }
        >
          <Button
            className={styles.navButton}
            sx={{
              color: 'white',

              '&:hover': {
                color: 'black',
                backgroundColor: 'white',
                borderRadius: '40px',
                border: '1px solid',
              },
            }}
          >
            Home
          </Button>
        </NavLink>
        <NavLink
          to="/About"
          className={({ isActive }) =>
            isActive ? `${styles.active} ${styles.noHover}` : styles.navButton
          }
        >
          <Button
            className={styles.navButton}
            sx={{
              color: 'white',

              '&:hover': {
                color: 'black',
                backgroundColor: 'white',
                borderRadius: '40px',
              },
            }}
          >
            About Us
          </Button>
        </NavLink>

        <NavLink
          to="/Services"
          className={({ isActive }) =>
            isActive ? `${styles.active} ${styles.noHover}` : styles.navButton
          }
        >
          <Button
            className={styles.navButton}
            sx={{
              color: 'white',

              '&:hover': {
                color: 'black',
                backgroundColor: 'white',
                borderRadius: '40px',
              },
            }}
          >
            Services
          </Button>
        </NavLink>

        <NavLink
          to="/Gallery"
          className={({ isActive }) =>
            isActive ? `${styles.active} ${styles.noHover}` : styles.navButton
          }
        >
          <Button
            className={styles.navButton}
            sx={{
              color: 'white',

              '&:hover': {
                color: 'black',
                backgroundColor: 'white',
                borderRadius: '40px',
              },
            }}
          >
            Gallery
          </Button>
        </NavLink>

        <NavLink
          to="/Contact"
          className={({ isActive }) =>
            isActive ? `${styles.active} ${styles.noHover}` : styles.navButton
          }
        >
          <Button
            className={styles.navButton}
            sx={{
              color: 'white',

              '&:hover': {
                color: 'black',
                backgroundColor: 'white',

                borderRadius: '40px',
              },
            }}
          >
            Contact
          </Button>
        </NavLink>
      </ButtonGroup>
    </nav>
  );
}

export default Navigation;
