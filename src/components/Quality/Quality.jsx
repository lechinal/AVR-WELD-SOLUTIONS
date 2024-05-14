import styles from "./Quality.module.css";

// import QImg from "../../images/quality/Q-img1.png";
// import QImg2 from "../../images/quality/Q-img2.png";
import QImg3 from "../../images/quality/Q-img3.png";

function Quality() {
  return (
    <section className={styles.qualitySection}>
      <div className={styles.imgContainer}>
        {/* <img src={QImg} alt="sudor" width={500} height={500} /> */}
        {/* <img src={QImg2} alt="sudor" width={500} height={500} /> */}
        <img src={QImg3} alt="sudor" width={500} height={500} />
      </div>
      <div className={styles.qualityContainer}>
        <div className={styles.subtitle}>Calitate și eficienta</div>
        <h2>Noi construim visul tau</h2>
        <p>
          Datorită angajamentului nostru față de calitate, suntem recunoscuți ca
          un furnizor de încredere în domeniul sudurilor metalice. Avem o
          reputație solidă în industrie, iar clienții noștri se pot baza pe noi
          pentru a livra produse și servicii de calitate, la timp și la prețuri
          competitive.
        </p>

        <div className={styles.facts}>
          <div className={styles.factsContent}>
            <div>200</div>
            <div>
              Proiecte
              <br />
              Finalizate
            </div>
          </div>

          <div className={styles.factsContent}>
            <div>200</div>
            <div>
              Clienti
              <br />
              Multumiti
            </div>
          </div>

          <div className={styles.factsContent}>
            <div>9000</div>
            <div>
              Suduri
              <br />
              Realizate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quality;
