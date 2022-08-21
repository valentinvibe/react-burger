import styles from './modal-overlay.module.css';
import React from 'react';
//--------------------------------------------------------------------------------

const ModalOverlay = ({ toggleModal }) => {
  return(
    <div className={styles.modalOverlay} onClick={toggleModal}></div>
  )
};

export default ModalOverlay;
