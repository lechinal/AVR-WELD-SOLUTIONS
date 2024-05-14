import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './CloseHamburgerMenuIcon.module.css';

function CloseHamburgerMenuIcon() {
  return (
    <div id="mobile" className={styles.closeIcon}>
      <FontAwesomeIcon icon={faTimes} />
    </div>
  );
}

export default CloseHamburgerMenuIcon;
