import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './HamburgerMenuIcon.module.css';

function HamburgerMenuIcon() {
  return (
    <div id="mobile" className={styles.menuIcon}>
      <FontAwesomeIcon icon={faBars} />
    </div>
  );
}

export default HamburgerMenuIcon;
