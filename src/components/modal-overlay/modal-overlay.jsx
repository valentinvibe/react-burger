import styles from "./modal-overlay.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  CLOSE_ORDER_MODAL,
  CLOSE_MODAL,
  DEL_ORDER_NUMBER,
  CLEAR_CHOOSEN_INGREDIENTS,
  CLOSE_FEED_MODAL,
  CLOSE_PROFILE_MODAL
} from "../../services/actions/actions";
import { homePage, feedPage, profilePage, ordersPage } from "../../utils/variables";
import { useHistory } from "react-router-dom";
import { getIsOpen } from "../../utils/functions";

const ModalOverlay = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {isOpen, orderModal, isFeedOrderOpen, isProfileOrderOpen}  = useSelector(getIsOpen);

  function handleOverlayClick() {
    if (isOpen) {
      dispatch({ type: CLOSE_MODAL });
      history.replace({ pathname: homePage });
    } if (orderModal) {
      dispatch({ type: CLOSE_ORDER_MODAL });
      dispatch({ type: DEL_ORDER_NUMBER });
      dispatch({ type: CLEAR_CHOOSEN_INGREDIENTS });
      history.replace({ pathname: homePage });
    }
    if (isFeedOrderOpen) {
      dispatch({type: CLOSE_FEED_MODAL})
      history.replace({ pathname: feedPage });
    }
    if (isProfileOrderOpen) {
      dispatch({type: CLOSE_PROFILE_MODAL})
      history.replace({ pathname: `${profilePage}/${ordersPage}` });
    }
  }

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}></div>
  );
};

export default ModalOverlay;
