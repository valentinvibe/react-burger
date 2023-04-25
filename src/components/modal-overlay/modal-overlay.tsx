import styles from "./modal-overlay.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  CLOSE_ORDER_MODAL,
  DEL_ORDER_NUMBER,
  CLEAR_CHOOSEN_INGREDIENTS,

} from "../../services/actions/actions";
import { useHistory } from "react-router-dom";
import { getIsOpen } from "../../utils/functions";
import { FC } from "react";

const ModalOverlay : FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { orderModal}  = useSelector(getIsOpen);

  function handleOverlayClick() {
   if (orderModal) {
    dispatch({ type: CLOSE_ORDER_MODAL });
    dispatch({ type: DEL_ORDER_NUMBER });
    dispatch({ type: CLEAR_CHOOSEN_INGREDIENTS });
    return
    }
    history.goBack()
  }

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}></div>
  );
};

export default ModalOverlay;
