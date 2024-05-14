import React, { useEffect, useState } from "react";
import styles from "./Comercial.module.css";

import logoWname from "../../images/logoAVR-wName.png";
// import ToolsImg from "components/ToolsImg/ToolsImg";

function Comercial() {
  const [numImages, setNumImages] = useState(6);

  const updateNumImages = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 2560) {
      setNumImages(10);
    } else if (screenWidth >= 1920) {
      setNumImages(8);
    } else if (screenWidth >= 1440) {
      setNumImages(5);
    } else if (screenWidth >= 1024) {
      setNumImages(3);
    } else if (screenWidth >= 768) {
      setNumImages(2);
    } else {
      setNumImages(1);
    }
    console.log(screenWidth);
  };

  useEffect(() => {
    updateNumImages();
    window.addEventListener("resize", updateNumImages);
  }, []);

  const images = Array.from({ length: numImages }, (_, index) => (
    <div className={styles.imgItem} key={index}>
      <img src={logoWname} alt="logo without name" width={200} />
    </div>
  ));

  // am definit nr de imagini si le-am stocat intr-un array,
  // astfel, daca adaugam sau elinimam imagini,
  // nu va trebui sa modificam manual codul jsx

  // const numImages = 5;

  return (
    <>
      <div className={styles.comercial}>
        <div className={styles.imgContainer}>{images}</div>
      </div>
      {/* <ToolsImg /> */}
    </>
  );
}

export default Comercial;
