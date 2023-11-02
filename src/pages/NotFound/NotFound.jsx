import React from 'react';
import styles from './NotFound.module.css';
import NotFoundImg from '../../images/notfoundPage.png';
import GoBackButton from '../../components/GoBackButton/GoBackButton';

function NotFound() {
  return (
    <div className={styles.notFound}>
      <img className={styles.notFoundImg} src={NotFoundImg} alt="Not Found" />
      <GoBackButton />
    </div>
  );
}

export default NotFound;
