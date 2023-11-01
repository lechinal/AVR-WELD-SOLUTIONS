import React from 'react';
import logoImgMic from '../../images/logoImgMic.png';
import styles from './Logo.module.css';

function Logo() {
  return (
    <div className={styles.logo}>
      <img
        className={styles.logoImg}
        src={logoImgMic}
        alt="Logo"
        width="140"
        height="100"
      />
    </div>
  );
}

export default Logo;