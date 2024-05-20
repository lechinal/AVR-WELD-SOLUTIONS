import styles from "./Advantages.module.css";

function AdvantagesDetails({ advantages, conclusion }) {
  return (
    <>
      {advantages.length > 0 ? (
        <div className={styles.advantagesSection}>
          <div className={styles.titleContainer}>
            <h4 className={styles.title}>Avantaje</h4>
          </div>

          <ul className={styles.advantagesList}>
            {advantages.map((advantage, index) => (
              <li key={index} className={styles.advantage}>
                <div className={styles.advantageContainer}>
                  <h3 className={styles.advantageTitle}>{advantage.title}</h3>
                  <p>{advantage.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <div>
            <h5>
              <mark>Concluzii</mark>
            </h5>
            <p>{conclusion}</p>
          </div>
        </div>
      ) : (
        <p className={styles.noAdvantages}>
          Această secțiune nu are avantaje disponibile momentan.
        </p>
      )}
    </>
  );
}

export default AdvantagesDetails;
