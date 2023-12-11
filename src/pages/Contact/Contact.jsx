import React, { useState } from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import styles from './Contact.module.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className={styles.contactBox}>
      <h3>Contact Form</h3>
      <form
        action="https://formspree.io/f/moqobqzb"
        method="POST"
        className={styles.form}
      >
        <label>Name:</label>
        <input
          className={styles.inputField}
          placeholder=" Nume si prenume..."
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label>Email:</label>
        <input
          className={styles.inputField}
          placeholder=" Email..."
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label>Message:</label>
        <textarea
          className={styles.textarea}
          placeholder=" Mesajul tau aici..."
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <div className={styles.btnBox}>
          <CustomButton
            text="Send"
            textColor="black"
            bgColor="white"
            borderColor="black"
            fontWeight={700}
            hoverTextColor="white"
            hoverBgColor="black"
            borderSolid="1px solid black"
            borderRadius="15px"
          />
        </div>
      </form>
    </div>
  );
}

export default Contact;
