import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Details.module.css";
import servicesData from "../../data/servicesData";
import WeldingDetails from "components/WeldingDetails/WeldingDetails";
import GoBackButton from "components/GoBackButton/GoBackButton";
import DetailsNav from "components/DetailsNav/DetailsNav";

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();

  const service = servicesData.find(service => service.id === parseInt(id, 10));
  if (!service) {
    navigate("/not-found");
    return null;
  }

  return (
    <div className={styles.dSection}>
      <h1>{service.title}</h1>

      <div className={styles.dImg}>
        <img src={service.image} alt={service.title} width={500} height={500} />
        <DetailsNav />
      </div>

      <div className={styles.dDetails}>
        <WeldingDetails
          description={service.description}
          details={service.details}
          advantages={service.advantages}
          wellcomeMessage={service.wellcomeMessage}
          conclusion={service.conclusion}
        />
      </div>

      <div className={styles.backBtn}>
        <GoBackButton
          textColor="#ce9233"
          border="2px solid #ce9233"
          hoverTextColor="white"
          hoverBorder="2px solid white"
          hoverBgColor="#ce9233"
          transtion="all 0.5s ease-in-out"
        />
      </div>
    </div>
  );
}

export default Details;
