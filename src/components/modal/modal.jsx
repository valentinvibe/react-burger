import {createPortal} from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import modalStyles from "./modal.module.css";
import { useEffect, useState } from 'react';
import ModalOverlay from '../modal-overlay/modal-overlay';



const Modal = ({toggleModal, children, title=''}) => {
  const [container] = useState(() => {
    return document.createElement('div')
  })

  useEffect(() => {
    container.id = 'react-modals';
    document.body.appendChild(container);

    const closeModalByEsc = (e) => {
      e.key === 'Escape' && toggleModal();
    };
    document.addEventListener('keydown', closeModalByEsc);

    return () => {
      document.body.removeChild(container);
      document.removeEventListener('keydown', closeModalByEsc);
    }
  }, [container, toggleModal])

  return(
    createPortal((
      <>
        <div className={`${modalStyles.container} pt-15 pr-10 pl-10 pb-15`}>
          <header className={modalStyles.header}>
            {title && (<h2 className={`${modalStyles.title} text text_type_main-large`}>{title}</h2>)}
            <button onClick={toggleModal} className={modalStyles.closeButton}>
              <CloseIcon type="primary"/>
            </button>
          </header>
          {children}
        </div>
        <ModalOverlay toggleModal={toggleModal}/>
      </>
    ), container
    )
  )
}

export default Modal
