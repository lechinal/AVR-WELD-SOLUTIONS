import React from 'react';
import styles from './Services.module.css';
import weld1 from '../../images/servicesImg/weld-1.jpeg';
import weld2 from '../../images/servicesImg/weld-2.jpg';
import weld3 from '../../images/servicesImg/weld-3.jpeg';
import weld4 from '../../images/servicesImg/weld-4.jpg';

function Services() {
  return (
    <div className={styles.services}>
      <div className={styles.titleBox}>
        <h1>Services</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          quidem.
        </p>
      </div>
      <div className={styles.cards}>
        <div className="card">
          <h2>Card 1 Title</h2>
          <img src={weld1} alt="weld1" width={255} height={255} />
          <p>Lorem ipsum for Card 1.</p>
        </div>

        <div className="card">
          <h2>Card 2 Title</h2>
          <img src={weld2} alt="weld1" width={255} height={255} />
          <p>Lorem ipsum for Card 1.</p>
        </div>

        <div className="card">
          <h2>Card 3 Title</h2>
          <img src={weld3} alt="weld1" width={255} height={255} />
          <p>Lorem ipsum for Card 1.</p>
        </div>

        <div className="card">
          <h2>Card 4 Title</h2>
          <img src={weld4} alt="weld1" width={255} height={255} />
          <p>Lorem ipsum for Card 1.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
