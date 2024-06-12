import ContactForm from "components/ContactForm/ContactForm";
import MapComponent from "components/MapComponent/MapComponent";
import Address from "components/Address/Address";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.contactBox}>
      <div className={styles.titleContainer}>
        <h1>Contact și Locație – Cum Ne Poți Găsi</h1>
      </div>
      <ContactForm />
      <MapComponent />
      <Address />
    </div>
  );
}

export default Contact;
