import styles from './modal-overlay.module.css';
import { useDispatch } from 'react-redux';
import { CLOSE_INGREDIENT_MODAL, CLOSE_ORDER_MODAL } from '../../services/actions/actions';
//--------------------------------------------------------------------------------

const ModalOverlay = () => {
  const dispatch = useDispatch();

  function handleOverlayClick() {
    dispatch({type: CLOSE_INGREDIENT_MODAL});
    dispatch({type: CLOSE_ORDER_MODAL});

  }

  return(
    <div className={styles.modalOverlay} onClick={handleOverlayClick}></div>
  )
};


export default ModalOverlay;
