import React, { useState } from 'react';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import styles from './Navigation.module.css';

function Navigation() {
  const [currentSection, setCurrentSection] = useState(null);

  const scrollToSection = sectionId => {
    setCurrentSection(sectionId);

    const section = document.getElementById(currentSection);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.nav}>
      <ButtonGroup
        variant="text"
        color="primary"
        aria-label="navigation buttons"
        sx={{ height: '50px' }}
      >
        <Button
          onClick={() => scrollToSection('about-us')}
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
        <Button
          onClick={() => scrollToSection('services')}
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
        <Button
          onClick={() => scrollToSection('gallery')}
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
          Contact
        </Button>
      </ButtonGroup>
    </nav>
  );
}

export default Navigation;
