import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProjectsGrid.module.css";
import projectsData from "../../data/projectsData";

function ProjectsGrid() {
  const navigate = useNavigate();

  const handleNavigation = id => {
    navigate(`/gallery/${id}`);
  };
  return (
    <section className={styles.projects}>
      <div className={styles.titleContainer}>
        <h1>Proiectele noastre</h1>
      </div>

      <div className={styles.gridProjects}>
        {projectsData.map(project => (
          <div key={project.id} className={styles[`card${project.id}`]}>
            <div
              className={styles.textBox}
              onClick={() => handleNavigation(project.id)}
            >
              <h4>{project.name}</h4>
            </div>
          </div>
        ))}
      </div>
     
    </section>
  );
}

export default ProjectsGrid;
