import React from "react";
import styles from "./GalleryGrid.module.css";

import img1 from "../../images/galleryImg/avr-1-D.jpg";
import img2 from "../../images/galleryImg/avr-11-D.jpg";
import img3 from "../../images/galleryImg/avr-13-D.jpg";
import img4 from "../../images/galleryImg/avr-14-D.jpg";
import img5 from "../../images/galleryImg/avr-2-D.jpg";
import img6 from "../../images/galleryImg/avr-7-D.jpg";
import img7 from "../../images/galleryImg/avr-8-D.jpg";
import img8 from "../../images/galleryImg/avr-20-D.jpg";
import img9 from "../../images/galleryImg/avr-4-D.jpg";

import weld1 from "../../images/toolsImg/welding1.svg";
import weld2 from "../../images/toolsImg/welding3.svg";
import weld3 from "../../images/toolsImg/welding6.svg";
import weld4 from "../../images/toolsImg/welding7.svg";
import weld5 from "../../images/toolsImg/welding8.svg";
import weld6 from "../../images/toolsImg/welding4.svg";
function GalleryGrid() {
  return (
    <div className={styles.imageContainer}>
      <div className={styles.column1}>
        <img src={weld1} alt="line" width={100} className={styles.svg3} />
        <img
          src={img1}
          alt="weld"
          width={500}
          height={500}
          className={styles.img}
        />
        <img
          src={img2}
          alt="weld"
          width={500}
          height={500}
          className={styles.img}
        />
        <img
          src={img3}
          alt="weld"
          width={500}
          height={500}
          className={styles.img}
        />
        <img src={weld2} alt="line" width={100} className={styles.svg1} />
      </div>
      <div className={styles.column2}>
        <img src={weld3} alt="line" width={100} className={styles.svg2} />
        <img
          src={img4}
          alt="weld"
          width={500}
          height={500}
          className={styles.img}
        />
        <img
          src={img5}
          alt="weld"
          width={500}
          height={500}
          className={styles.img}
        />
        <img
          src={img6}
          alt="weld"
          width={500}
          height={500}
          className={styles.img}
        />
        <img src={weld4} alt="line" width={100} className={styles.svg1} />
      </div>
      <div className={styles.column3}>
        <img src={weld5} alt="line" width={100} className={styles.svg3} />
        <img
          src={img7}
          alt="weld"
          width={500}
          height={500}
          className={styles.img}
        />
        <img
          src={img8}
          alt="weld"
          width={500}
          height={500}
          className={styles.img}
        />
        <img
          src={img9}
          alt="weld"
          width={500}
          height={500}
          className={styles.img}
        />
        <img src={weld6} alt="line" width={100} className={styles.svg1} />
      </div>
    </div>
  );
}

export default GalleryGrid;
