import styles from './modal-overlay.module.css';
import PropTypes from 'prop-types'
//--------------------------------------------------------------------------------

const ModalOverlay = ({ toggleModal }) => {
  return(
    <div className={styles.modalOverlay} onClick={toggleModal}></div>
  )
};

ModalOverlay.propTypes = {
  toggleModal: PropTypes.func.isRequired
}

export default ModalOverlay;
