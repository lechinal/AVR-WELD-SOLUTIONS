import React from 'react';
import Contact from '../../pages/Contact/Contact';
import CustomButton from 'components/CustomButton/CustomButton';
import styles from './ContactModal.module.css';

function ContactModal({ onClose }) {
  return (
    <div className={styles.modalBox}>
      <h1>Contact modala</h1>
      <Contact />

      <CustomButton
        text="Close"
        textColor="black"
        bgColor="white"
        borderColor="black"
        fontWeight={700}
        hoverTextColor="white"
        hoverBgColor="black"
        borderSolid="1px solid black"
        borderRadius="15px"
        onClick={onClose}
        marginBottom="15px"
      />
    </div>
  );
}

export default ContactModal;
