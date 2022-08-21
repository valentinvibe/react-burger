import {createPortal} from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import modalStyles from "./modal.module.css";



const Modal = ({children, title=''}) => {
  const modalRoot = createPortal(
    document.getElementById('react-modals'));

  return( createPortal(
    <>
      <div className={`${modalStyles.container} pt-15 pr-10 pl-10 pb-15`}>
        <header className={modalStyles.header}>
          {title && (<h2 className={`${modalStyles.title} text text_type_main-large`}>{title}</h2>)}
          {/* <button onClick={handlePopupClose} className={modalStyles.closeButton}>
            <CloseIcon type="primary"/>
          </button> */}
        </header>
        {children}
      </div>
      {/* <ModalOverlay handlePopupClose={handlePopupClose}/> */}
    </>
    , modalRoot
  )
  )
}

export default Modal
