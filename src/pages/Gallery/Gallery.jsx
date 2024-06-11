import React from "react";
import styles from "../Gallery/Gallery.module.css";

import GalleryGrid from "components/GalleryGrid/GalleryGrid";
import ProjectsGrid from "components/ProjectsGrid/ProjectsGrid";
import ProjectSection from "components/ProjectSection/ProjectSection";

function Gallery() {
  return (
    <div id="gallery" className={styles.gallery}>
      <div className={styles.titleContainer}>
        <h1>Galerie</h1>
      </div>
      <GalleryGrid />
      <ProjectsGrid />
      <ProjectSection />
    </div>
  );
}

export default Gallery;
