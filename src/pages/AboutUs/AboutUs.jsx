import React from 'react';
import styles from './AboutUs.module.css';
import avr7 from '../../images/avr_7.jpeg';
import CustomButton from '../../components/CustomButton/CustomButton';

function AboutUs() {
  return (
    <div id="about-us" className={styles.aboutUsBox}>
      <div className={styles.aboutUsDetails}>
        <h1 className={styles.aboutUsTitle}>Despre noi</h1>

        <p>
          AVR Weld Solutions, specializată în industria de confecții metalice,
          fabricarea și montarea traseelor de tuburi metalice destinate
          transportului lichidelor și gazelor industriale, precum și realizarea
          de mici structuri metalice. Cu o experiență de peste 25 de ani în
          domeniu și deținând autorizație ISCIR în sudură, suntem mândri să vă
          prezentăm realizările noastre remarcabile în Europa și Africa.
        </p>
        <p>
          Mândria noastră este abilitatea de a oferi soluții la cheie pentru
          proiectele industriale, concentrându-ne pe fabricarea și instalarea
          sistemelor de conducte metalice destinate transportului <br />
          lichidelor și gazelor industriale. Flexibilitatea noastră ne permite
          să ne adaptăm la cerințele specifice ale fiecărui proiect,
          asigurându-ne că rezultatul final este întotdeauna de cea mai înaltă
          calitate.
        </p>

        <div className={styles.aboutUsBtnBox}>
          <CustomButton
            text="Gallery"
            textColor="black"
            bgColor="white"
            borderColor="black"
            fontWeight={700}
            border="1px solid black"
            hoverTextColor="white"
            hoverBgColor="black"
            hoverBorderColor="black"
          />
          <CustomButton
            text="Contact Us"
            textColor="black"
            bgColor="white"
            borderColor="black"
            fontWeight={700}
            hoverTextColor="white"
            hoverBgColor="black"
            hoverBorderColor="black"
          />
        </div>
      </div>

      <div className={styles.aboutUsImgBox}>
        <img
          className={styles.aboutUsImg}
          src={avr7}
          alt="avr_7"
          width={800}
          height={600}
        />
      </div>
    </div>
  );
}

export default AboutUs;
