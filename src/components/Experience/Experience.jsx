import styles from "./Experience.module.css";

function Experience() {
  return (
    <div className={styles.experience}>
      <div className={styles.pageTitle}>
        <div>Experiența</div>
        <h1>Experiența noastră este caracterizată de:</h1>
      </div>

      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <p>
            <strong>Expertiză în Sudură: </strong>Cu certificări ISCIR și o
            echipă de profesioniști cu o vastă experiență în domeniul sudurii,
            vă garantăm că fiecare proiect este realizat cu cea mai înaltă
            precizie și calitate. Avem o istorie bogată în realizări remarcabile
            și suntem mândri să fim recunoscuți pentru competența și
            profesionalismul nostru în domeniu.
          </p>
        </div>

        <div className={styles.card}>
          <p>
            <strong>Soluții Personalizate: </strong>Înțelegem că fiecare proiect
            are nevoi și cerințe unice. De aceea, ne concentrăm eforturile pe
            proiectele dumneavoastră, colaborând strâns cu fiecare client pentru
            a înțelege în profunzime obiectivele și a aduce valoare adăugată
            prin soluții personalizate și adaptate la cerințele specifice.
          </p>
        </div>
        <div className={styles.card}>
          <p>
            <strong>Inovație în Conducerea Metalică: </strong>La AVR Weld
            Solutions, inovația este în centrul a tot ceea ce facem. Suntem
            mereu în căutarea de noi tehnologii și metode pentru a transforma
            metalele în soluții durabile și eficiente. Cu un focus constant pe
            îmbunătățirea proceselor noastre și aducerea de inovații în domeniu,
            ne asigurăm că fiecare proiect este la vârful tehnologiei și oferă
            rezultate deosebite.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
