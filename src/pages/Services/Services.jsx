import React from 'react';

import CustomButton from 'components/CustomButton/CustomButton';
import styles from './Services.module.css';
import servicesData from '../../data/servicesData';
import { useNavigate } from 'react-router-dom';

function Services() {
  const navigate = useNavigate('');

  return (
    <div id="services" className={styles.services}>
      <div className={styles.titleBox}>
        <h1>Services</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          quidem.
        </p>
      </div>

      <div className={styles.cards}>
        {servicesData.map((service, index) => (
          <div key={index} className={styles.card}>
            <h2>{service.title}</h2>
            <img
              className={styles.cardImg}
              src={service.image}
              alt={`weld${index + 1}`}
              width={255}
              height={255}
            />
            <p>{service.description}</p>

            <CustomButton
              text="More Details"
              textColor="black"
              bgColor="white"
              borderColor="black"
              fontWeight={700}
              borderSolid="1px solid black"
              hoverTextColor="white"
              hoverBgColor="black"
              marginBottom="25px"
              borderRadius="15px"
              onClick={() => navigate(`/Details/${service.id}`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
