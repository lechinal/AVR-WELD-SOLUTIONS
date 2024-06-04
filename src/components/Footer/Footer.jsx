import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

// import logo from "../../images/logoAVR-small.svg";
import phoneIcon from "../../images/phone.svg";
import emailIcon from "../../images/envelope.svg";
import adressIcon from "../../images/locationPin.svg";
import listBullet from "../../images/bulletRight.svg";

function Footer() {
  const currentYear = new Date().getFullYear();

  const addressData = [
    {
      icon: adressIcon,
      label: " Str. Exemplu, Nr. 123, Blaj, jud. Alba ",
    },
  ];
  const contactData = [
    { icon: phoneIcon, label: "+123 456 789" },
    { icon: emailIcon, label: "avrweldsolutions@gmail.com" },
  ];
  return (
    <footer>
      <div className={styles.footerBox}>
        <div className={styles.footerDetails}>
          <div className={styles.footerAddress}>
            <h3>Address</h3>
            <address>
              {addressData.map((text, index) => (
                <div key={index} className={styles.addressItem}>
                  <img
                    src={text.icon}
                    alt="location pin"
                    className={styles.icon}
                    width={15}
                    height={15}
                  />
                  <p key={index}>{text.label}</p>
                </div>
              ))}
            </address>
          </div>
          <div className={styles.footerContact}>
            <h3>Contact</h3>
            <address>
              {contactData.map((item, index) => (
                <div key={index} className={styles.contactItem}>
                  <img
                    src={item.icon}
                    alt="contact"
                    className={styles.icon}
                    width={15}
                    height={15}
                  />
                  <p>{item.label}</p>
                </div>
              ))}
            </address>
          </div>
        </div>
        <div className={styles.footerNav}>
          <h3>Navigation</h3>
          <div>
            <span>
              <img src={listBullet} alt="bullet" width={5} />
              <NavLink to="/" className={styles.link}>
                Home
              </NavLink>
            </span>
            <span>
              <img src={listBullet} alt="bullet" width={5} />
              <NavLink to="/About" className={styles.link}>
                About us
              </NavLink>
            </span>

            <span>
              <img src={listBullet} alt="bullet" width={5} />
              <NavLink to="/Services" className={styles.link}>
                Services
              </NavLink>
            </span>
            <span>
              <img src={listBullet} alt="bullet" width={5} />
              <NavLink to="/Gallery" className={styles.link}>
                Gallery
              </NavLink>
            </span>
            <span>
              <img src={listBullet} alt="bullet" width={5} />
              <NavLink to="/Contact" className={styles.link}>
                Contact
              </NavLink>
            </span>
          </div>
        </div>
        <div className={styles.footerSocial}>
          <h3>Follow us</h3>
          <span>
            <Link>
              <BsFacebook className={styles.footerSocialIcon1} />
            </Link>
            <Link>
              <BsInstagram className={styles.footerSocialIcon2} />
            </Link>
          </span>
          {/* <div className={styles.logoBox}>
          <Link to="/" className={styles.logoLink}>
            <img className={styles.logoImg} src={logoAvrWeld} alt="Logo" />
          </Link>
        </div> */}
        </div>
      </div>
      <div className={styles.designedBy}>
        <p>
          <strong>
            <span className={styles.designedByText}>
              &copy; {currentYear} Copyright AVG WELD SOLUTIONS locul unde
              Metalul Prinde Viață. Toate drepturile rezervate. Dezvoltat și
              întreținut de:{" "}
            </span>
            <Link to="https://github.com/lechinal" target="_blank">
              <FaGithub className={styles.designedByIcon} />
            </Link>{" "}
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
