import React from "react";
import styles from "./GalleryGrid.module.css";

import img1 from "../../images/galleryImg/avr-1-D.jpg";
import img2 from "../../images/galleryImg/avr-11-D.jpg";
import img3 from "../../images/galleryImg/avr-13-D.jpg";
import img4 from "../../images/galleryImg/avr-14-D.jpg";
import img5 from "../../images/galleryImg/avr-2-D.jpg";
import img6 from "../../images/galleryImg/avr-7-D.jpg";
import img7 from "../../images/galleryImg/avr-8-D.jpg";

import vLine from "../../images/vLine.svg";

function GalleryGrid() {
  return (
    <div className={styles.imageContainer}>
      <div className={styles.column1}>
        <img src={vLine} alt="line" width={30} className={styles.svg3} />
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
        <img src={vLine} alt="line" width={30} className={styles.svg1} />
      </div>
      <div className={styles.column2}>
        <img src={vLine} alt="line" width={30} className={styles.svg2} />
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
        <img src={vLine} alt="line" width={30} className={styles.svg1} />
      </div>
      <div className={styles.column3}>
        <img src={vLine} alt="line" width={30} className={styles.svg3} />
        <img
          src={img7}
          alt="weld"
          width={500}
          height={500}
          className={styles.img}
        />
        <img
          src={img7}
          alt="weld"
          width={500}
          height={500}
          className={styles.img}
        />
        <img
          src={img7}
          alt="weld"
          width={500}
          height={500}
          className={styles.img}
        />
        <img src={vLine} alt="line" width={30} className={styles.svg1} />
      </div>
    </div>
  );
}

export default GalleryGrid;
