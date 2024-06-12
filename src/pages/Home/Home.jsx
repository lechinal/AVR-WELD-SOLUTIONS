import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Home.module.css";

import specialisti from "../../images/homeImg/AI_Generated_weld_8.png";
import idei from "../../images/homeImg/IAweld9.png";
import solutii from "../../images/homeImg/IAweld12.png";
import CustomButton from "components/CustomButton/CustomButton";
import HeroSection from "components/HeroSection/HeroSection";
import ProjectSection from "components/ProjectSection/ProjectSection";
import Quality from "components/Quality/Quality";

function Home() {
  const navigate = useNavigate("");

  return (
    <>
      <section>
        <div className={styles.titleFirstPart}>
          {/* <h1>Bine ati venit</h1> */}
        </div>
        <div className={styles.welcomeSection}>
          <div className={styles.titleSecondPart}>
            <div
              className={`${styles.titleSecondPartTitle} ${styles.titleAnimation}`}
            >
              <h1>AVR Weld </h1>
            </div>

            <div
              className={`${styles.titleSecondPartTitleTitle} ${styles.titleAnimation}`}
            >
              <h1> Solutions</h1>
            </div>
          </div>
        </div>

        <section className={styles.imagesContainer}>
          <div className={styles.images}>
            <h4>Specialiști în confecții metalice și transport industrial</h4>
            <img src={specialisti} alt={specialisti} width={450} height={450} />
          </div>
          <div className={styles.images}>
            <h4>Transformăm ideile în realitate</h4>
            <img src={idei} alt={idei} width={450} height={450} />
          </div>
          <div className={styles.images}>
            <h4>Descoperiți soluțiile noastre complete</h4>
            <img src={solutii} alt={solutii} width={450} height={450} />
          </div>
        </section>
        <div className={styles.btn}>
          <CustomButton
            text="Galerie"
            textColor="black"
            bgColor="white"
            borderColor="white"
            fontWeight={700}
            hoverTextColor="#fff"
            hoverBgColor="black"
            marginBottom="25px"
            pdL="30px"
            pdR="30px"
            pdT="15px"
            pdB="15px"
            onClick={() => navigate("/Gallery")}
          />
        </div>
      </section>
      <HeroSection />
      <ProjectSection />
      <Quality />
    </>
  );
}

export default Home;
