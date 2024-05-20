import React from "react";
import styles from "./HeroSection.module.css";
import heroImg1 from "../../images/heroImg/heroS1.jpeg";
import heroImg2 from "../../images/heroImg/heroS2.jpeg";
import heroImg3 from "../../images/heroImg/heroS3.png";
import heroImg4 from "../../images/heroImg/heroS4.jpeg";
// import listBullet from "../../images/bulletRight.svg";

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.imageSide}>
        <img src={heroImg1} alt="sudor" width={500} />
        <img src={heroImg2} alt="tubulatura" width={500} />
        <img src={heroImg3} alt="tubulatura" width={500} />
        <img src={heroImg4} alt="sudor" width={500} />
      </div>

      <div className={styles.contentSide}>
        <div className={styles.subtitle}>PRECIZIE ȘI PRICEPERE</div>

        <div className={styles.text}>
          <h2>AVR Weld Solutions</h2>
          <p>
            Serviciile de sudură a confecțiilor metalice sunt esențiale pentru o
            gamă largă de industrii, inclusiv construcții, manufacturare, auto,
            aeronautică, navală și multe altele. Suntem specializați în sudura
            diferitelor tipuri de confecții metalice, precum și în producția
            acestora, oferind soluții personalizate pentru nevoile fiecărui
            client.
          </p>
        </div>

        <div className={styles.belowContentSide}>
          <div className={styles.leftContainer}>
            <ul className={styles.list}>
              <li>Servicii profesionale</li>
              <li>Echipa de specialisti</li>
              <li>Preturi competitive</li>
              <li>
                {/* <img src={listBullet} alt="bullet" />  */}
                Echipamente moderne
              </li>
            </ul>
          </div>

          <div className={styles.rightContainer}>
            <div>
              <h4>
                Imbinari de
                <br />
                elemente
              </h4>
            </div>
            <div>
              <h4>
                Confectii <br />
                metalice
              </h4>
            </div>
          </div>
        </div>

        <div className={styles.subtitle2}>SUDURA SI LUCRARI METALICE</div>
      </div>
    </section>
  );
}

export default HeroSection;
