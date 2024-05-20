// import servicesData from "../../data/servicesData";
import AdvantagesDetails from "components/AdvantagesDetails/AdvantagesDetails";
import styles from "./WeldingDetails.module.css";

function WeldingDetails({
  description,
  details,
  wellcomeMessage,
  advantages,
  conclusion,
  advantageDescription,
}) {
  return (
    <section className={styles.weldingDetailsContainer}>
      <p className={styles.description}>{description}</p>
      <p className={styles.welcomeMessage}>{wellcomeMessage}</p>
      <p className={styles.details}>{details}</p>
      <AdvantagesDetails advantages={advantages} conclusion={conclusion} />
    </section>
  );
}

export default WeldingDetails;
