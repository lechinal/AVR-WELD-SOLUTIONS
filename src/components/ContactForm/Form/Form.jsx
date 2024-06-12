import React, { useState } from "react";
import CustomButton from "../../CustomButton/CustomButton.jsx";
import styles from "./Form.module.css";
function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div className={styles.formContainer}>
      <form
        action="https://formspree.io/f/moqobqzb"
        method="POST"
        className={styles.form}
      >
        <label htmlFor="full-name">Nume complet:</label>
        <input
          className={styles.inputField}
          placeholder=" Nume si prenume..."
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="email-address">Adresa de email:</label>
        <input
          className={styles.inputField}
          placeholder=" email@domain.tld"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="message">Mesaj:</label>
        <textarea
          className={styles.textarea}
          placeholder=" Mesajul tau aici..."
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
        />
        <div className={styles.btnBox}>
          <CustomButton
            text="Send"
            type="submit"
            textColor="white"
            bgColor="black"
            borderColor="white"
            fontWeight={700}
            hoverTextColor="#fff"
            hoverBgColor="#ce9233"
            marginBottom="25px"
            pdL="30px"
            pdR="30px"
            pdT="15px"
            pdB="15px"
            transition=""
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
