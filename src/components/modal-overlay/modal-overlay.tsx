import styles from "./modal-overlay.module.css";
import { FC } from "react";

interface IProps {
  onClose?: () => void
}

const ModalOverlay : FC<IProps> = ({onClose}) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}></div>
  );
};

export default ModalOverlay;
