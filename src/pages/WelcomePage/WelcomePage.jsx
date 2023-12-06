import React from 'react';
import styles from './WelcomePage.module.css';
function WelcomePage() {
  return (
    <section className={styles.welcomeSection}>
      <div className={styles.titleFirstPart}>
        <h1>Bine ați venit la</h1>
      </div>

      <div className={styles.titleSecondPart}>
        <h1>AVR Weld Solutions!</h1>
      </div>

      <div className={styles.text}>
        <p>
          Specialiști în confecții metalice și transport industrial. Transformăm
          ideile în realitate. Descoperiți soluțiile noastre complete!
        </p>
      </div>
    </section>
  );
}

export default WelcomePage;
