import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function Footer() {
  const addressData = [
    'Adresa: Strada Exemplu, Nr. 123',
    'Oraș: Blaj Judet: Alba',
    'Judet: Alba',
    'Cod Poștal: 12345',
    'Telefon: +123 456 789',
    'Email: avrweldsolutions@gmail.com',
  ];
  return (
    <footer>
      <div className={styles.footerBox}>
        <div className={styles.footerContact}>
          <h3>Contact:</h3>
          <address>
            {addressData.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </address>
        </div>

        <div className={styles.footerNavBar}>
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

        <div className={styles.footerSocial}>
          <BsFacebook className={styles.footerSocialIcon} />
          <BsInstagram className={styles.footerSocialIcon} />
        </div>
      </div>
      <div className={styles.designedBy}>
        <p>
          <strong>
            <span className={styles.designedByText}>
              © 2023 by AVG WELD SOLUTIONS locul unde Metalul Prinde Viață.
              Toate drepturile rezervate. Dezvoltat și întreținut cu pasiune de:{' '}
            </span>
            <Link to="https://github.com/lechinal" target="_blank">
              <FaGithub className={styles.designedByIcon} />
            </Link>{' '}
            <Link
              to="https://www.linkedin.com/in/alin-lechintan-2582b181/"
              target="_blank"
            >
              <FaLinkedin className={styles.designedByIcon} />
            </Link>
          </strong>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
