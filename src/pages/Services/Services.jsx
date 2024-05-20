import React from "react";

import styles from "./Services.module.css";
import ServicesCard from "components/ServicesCard/ServicesCard";
// import CustomButton from "components/CustomButton/CustomButton";

function Services() {
  return (
    <div id="services" className={styles.services}>
      <div className={styles.titleContainer}>
        <h1>Servicii</h1>
      </div>

      <ServicesCard />
    </div>
  );
}
export default Services;
