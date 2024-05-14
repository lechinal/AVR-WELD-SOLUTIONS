import React from 'react';
import styles from './GoBackButton.module.css';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function GoBackButton() {
  return (
    <div className={styles.backBtnDiv}>
      <Button variant="outlined" startIcon={<ArrowBackIcon />}>
        Go Back
      </Button>
    </div>
  );
}

export default GoBackButton;
