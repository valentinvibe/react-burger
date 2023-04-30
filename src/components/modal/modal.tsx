import { createPortal } from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import modalStyles from "./modal.module.css";
import { ReactNode, useEffect } from "react";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { FC } from "react";

interface IModal {
  title? : string
  children? : ReactNode
  onClose: () => void
}

const Modal : FC<IModal> = ({ children, title = "", onClose }) => {
  const container = document.getElementById("react-modals") as HTMLElement;
 
  useEffect(() => {
    const handleEscKeydown = (evt: KeyboardEvent) => {
      if (evt.key === "Escape") {
        onClose()
      }
    };
    document.addEventListener('keydown', handleEscKeydown);
    return () => {
      document.removeEventListener('keydown', handleEscKeydown);
    };
  }, [onClose]);

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
            onClick={onClose}
            className={modalStyles.closeButton}
          >
            <CloseIcon type="primary" />
          </button>
        </div>
        {children}
      </div>
      <ModalOverlay onClose={onClose}/>
    </>,
    container
  );
};

export default Modal;
