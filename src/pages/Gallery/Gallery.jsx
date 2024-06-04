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
      <div className={styles.newSection}>
        the new section, which will be here needs to be a new component, maybe
        with this color
      </div>
    </div>
  );
}

export default Gallery;
