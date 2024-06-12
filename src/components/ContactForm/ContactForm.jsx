import styles from "./ContactForm.module.css";
import Form from "./Form/Form";

function ContactForm() {
  return (
    <>
      <div className={styles.titleContainer}>
        <h2 className={styles.formTitle}>
          Ai întrebări? Suntem aici să te ajutăm! Trimite-ne un mesaj!
        </h2>
        <Form />
      </div>
    </>
  );
}

export default ContactForm;
