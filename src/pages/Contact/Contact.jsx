import ContactForm from "components/ContactForm/ContactForm";
import styles from "./Contact.module.css";
import MapComponent from "components/MapComponent/MapComponent";

function Contact() {
  return (
    <div className={styles.contactBox}>
      <div className={styles.titleContainer}>
        <h1>Contact Form</h1>
      </div>
      <ContactForm />
      <MapComponent />
    </div>
  );
}

export default Contact;
