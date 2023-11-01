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
        sx={{ height: '50px' }}
      >
        <NavLink to="/">
          <Button
            className={styles.navButton}
            sx={{
              color: 'white',
              fontWeight: 'bold',

              '&:hover': {
                color: 'black',
                backgroundColor: 'white',

                borderRadius: '15px',
              },
            }}
          >
            Home
          </Button>
        </NavLink>
        <NavLink to="/About">
          <Button
            className={styles.navButton}
            sx={{
              color: 'white',
              fontWeight: 'bold',

              '&:hover': {
                color: 'black',
                backgroundColor: 'white',

                borderRadius: '15px',
              },
            }}
          >
            About Us
          </Button>
        </NavLink>

        <NavLink to="/Services">
          <Button
            className={styles.navButton}
            sx={{
              color: 'white',
              fontWeight: 'bold',

              '&:hover': {
                color: 'black',
                backgroundColor: 'white',

                borderRadius: '15px',
              },
            }}
          >
            Services
          </Button>
        </NavLink>

        <NavLink to="/Gallery">
          <Button
            className={styles.navButton}
            sx={{
              color: 'white',
              fontWeight: 'bold',

              '&:hover': {
                color: 'black',
                backgroundColor: 'white',

                borderRadius: '15px',
              },
            }}
          >
            Gallery
          </Button>
        </NavLink>

        <NavLink to="/Contact">
          <Button
            className={styles.navButton}
            sx={{
              color: 'white',
              fontWeight: 'bold',
              // paddingBottom: '15px',

              '&:hover': {
                color: 'black',
                backgroundColor: 'white',

                borderRadius: '15px',
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
