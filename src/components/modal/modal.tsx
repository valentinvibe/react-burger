import { createPortal } from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import modalStyles from "./modal.module.css";
import { ReactNode, useCallback, useEffect } from "react";
import ModalOverlay from "../modal-overlay/modal-overlay";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  DEL_ORDER_NUMBER,
  CLEAR_CHOOSEN_INGREDIENTS,
  CLOSE_ORDER_MODAL
} from "../../services/actions/actions";
import { useHistory } from "react-router-dom";
import { getIsOpen } from "../../utils/functions";
import { FC } from "react";

interface IModal {
  title? : string
  children? : ReactNode
}

const Modal : FC<IModal> = ({ children, title = "" }) => {
  const container = document.getElementById("react-modals") as HTMLElement;
  const dispatch = useDispatch();
  const history = useHistory();
  const {orderModal}  = useSelector(getIsOpen);

  const handleCloseModal = useCallback(() => {
    if (orderModal) {
      dispatch({ type: CLOSE_ORDER_MODAL });
      dispatch({ type: DEL_ORDER_NUMBER });
      dispatch({ type: CLEAR_CHOOSEN_INGREDIENTS });
      return
    }
    history.goBack()
  }, [dispatch, history, orderModal]);



  useEffect(() => {
    const closeModalByEsc = (e : KeyboardEvent) => {
      e.key === "Escape" && handleCloseModal();
    };
    document.addEventListener("keydown", closeModalByEsc);

    return () => {
      document.removeEventListener("keydown", closeModalByEsc);
    };
  }, [container, handleCloseModal]);

  return createPortal(
    <>
      <div className={`${modalStyles.container} pt-15 pr-10 pl-10 pb-15`}>
        <div className={modalStyles.header}>
          {title && (
            <h2 className={`${modalStyles.title} text text_type_main-large`}>
              {title}
            </h2>
          )}
          <button
            onClick={handleCloseModal}
            className={modalStyles.closeButton}
          >
            <CloseIcon type="primary" />
          </button>
        </div>
        {children}
      </div>
      <ModalOverlay />
    </>,
    container
  );
};

Modal.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
};

export default Modal;
