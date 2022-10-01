import {createPortal} from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import modalStyles from "./modal.module.css";
import { useEffect } from 'react';
import ModalOverlay from '../modal-overlay/modal-overlay';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CLOSE_INGREDIENT_MODAL, CLOSE_ORDER_MODAL, DEL_ORDER_NUMBER } from '../../services/actions/actions';



const Modal = ({children, title=''}) => {
  const container = document.getElementById('react-modals');
  const dispatch = useDispatch();

  function handleCloseModal() {
    dispatch({type: CLOSE_INGREDIENT_MODAL})
    dispatch({type: CLOSE_ORDER_MODAL})
    dispatch({type: DEL_ORDER_NUMBER})

  }

  useEffect(() => {
    const closeModalByEsc = (e) => {
      e.key === 'Escape' && handleCloseModal();
    };
    document.addEventListener('keydown', closeModalByEsc);

    return () => {
      document.removeEventListener('keydown', closeModalByEsc);
    }
  }, [container])

  return(
    createPortal((
      <>
        <div className={`${modalStyles.container} pt-15 pr-10 pl-10 pb-15`}>
          <div className={modalStyles.header}>
            {title && (<h2 className={`${modalStyles.title} text text_type_main-large`}>{title}</h2>)}
            <button onClick={handleCloseModal} className={modalStyles.closeButton}>
              <CloseIcon type="primary"/>
            </button>
          </div>
          {children}
        </div>
        <ModalOverlay/>
      </>
    ), container
    )
  )
}

Modal.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string
}

export default Modal
