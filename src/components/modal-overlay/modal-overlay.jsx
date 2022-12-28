import styles from './modal-overlay.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_ORDER_MODAL, CLOSE_MODAL, DEL_ORDER_NUMBER, CLEAR_CHOOSEN_INGREDIENTS} from '../../services/actions/actions';

const ModalOverlay = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((store) => store.modal.isOpen)

  function handleOverlayClick() {
    if (isOpen) {
      dispatch({type: CLOSE_MODAL});
    } else {
      dispatch({type: CLOSE_ORDER_MODAL});
      dispatch({type: DEL_ORDER_NUMBER});
      dispatch({type: CLEAR_CHOOSEN_INGREDIENTS});
    }
  }

  return(
    <div className={styles.modalOverlay} onClick={handleOverlayClick}></div>
  )
};


export default ModalOverlay;
