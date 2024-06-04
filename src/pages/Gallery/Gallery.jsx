import React from "react";
import styles from "../Gallery/Gallery.module.css";

import GalleryGrid from "components/GalleryGrid/GalleryGrid";

function Gallery() {
  return (
    <div id="gallery" className={styles.gallery}>
      <div className={styles.titleContainer}>
        <h1>Galerie</h1>
      </div>
      <GalleryGrid />
    </div>
  );
}

export default Gallery;
