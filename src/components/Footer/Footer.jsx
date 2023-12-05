import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  const addressData = [
    'Adresa: Strada Exemplu, Nr. 123',
    'Oraș: Blaj',
    'Judet: Alba',
    'Cod Poștal: 12345',
    'Țară: Romania',
    'Telefon: +123 456 789',
    'Email: avrweldsolutions@gmail.com',
  ];
  return (
    <footer>
      <div className={styles.footerBox}>
        <div className={styles.div1}>
          <h3>Contact</h3>
          <address>
            {addressData.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </address>
        </div>

        <div className={styles.div2}>
          <NavLink to="/" className={styles.link}>
            Home
          </NavLink>
          <NavLink to="/About" className={styles.link}>
            About Us
          </NavLink>
          <NavLink to="/Services" className={styles.link}>
            Services
          </NavLink>
          <NavLink to="/Gallery" className={styles.link}>
            Gallery
          </NavLink>
          <NavLink to="/Contact" className={styles.link}>
            Contact
          </NavLink>
        </div>

        <div className={styles.div3}>
          <BsFacebook style={{ width: '40px', height: '40px' }} />
          <BsInstagram style={{ width: '40px', height: '40px' }} />

          {/* <FacebookIcon style={{ width: '50px', height: '50px' }} />
          <InstagramIcon style={{ width: '50px', height: '50px' }} /> */}
        </div>
      </div>
      <div className={styles.div4}>
        <p>
          <strong>
            © 2023 by AVG WELD SOLUTIONS. Powered and secured by ...
          </strong>
        </p>
      </div>
    </footer>
  );
}

export default Footer;