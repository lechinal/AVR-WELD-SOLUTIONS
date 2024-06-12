import { useParams, useNavigate } from "react-router-dom";
import styles from "./Projects.module.css";

import projectsData from "data/projectsData";

import GoBackButton from "components/GoBackButton/GoBackButton";
import ProjectSection from "components/ProjectSection/ProjectSection";
function Projects() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(project => project.id === parseInt(id, 10));
  if (!project) {
    navigate("/not-found");
    return null;
  }
  return (
    <section className={styles.project}>
      <div className={styles.pageTitle}>
        <h1>{project.name}</h1>
      </div>
      <div className={styles.card}>
        <div className={styles.top}>
          <img src={project.image} alt="proiect" />
        </div>

        <div className={styles.bottom}>
          <div className={styles.left}>
            <div className={styles.box}>
              <h4>Categorie</h4>
              <p>{project.category}</p>
            </div>
            <div className={styles.box}>
              <h4>Client</h4>
              <p> - </p>
            </div>
            <div className={styles.box}>
              <h4>Tara</h4>
              <p> - </p>
            </div>
            <div className={styles.box}>
              <h4>Data</h4>
              <p> - </p>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.rightTitle}>
              <h2>{project.name}</h2>
            </div>
            <div>
              <p>{project.description}</p>
            </div>
            <div className={styles.advantages}>
              <div className={styles.advTitle}>
                <h3>Avantaje</h3>
              </div>
              <p>{project.advantages}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.backBtn}>
        <GoBackButton
          textColor="white"
          border="2px solid white"
          hoverTextColor="#ce9233"
          hoverBorder="2px solid #ce9233"
          transtion="all 0.5s ease-in-out"
        />
      </div>
      <ProjectSection />
    </section>
  );
}

export default Projects;
