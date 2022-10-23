import React from 'react';
import ReactDom from 'react-dom';
import './Modal.css';

export default function ModalPortal(props) {
  const { children, isOpen, closeModal } = props;

  /*
    funcion para detener la propagacion de evento click de cierre en pantalla borrrosa.
  */
  const handleContainerClick = (e) => {
    e.stopPropagation();
  };

  return ReactDom.createPortal(
    <article onClick={closeModal} className={`modal ${isOpen && 'is-open'}`}>
      <div onClick={handleContainerClick} className="modal-container ">
        <button onClick={closeModal} className="modal-close">
          X
        </button>
        {children}
      </div>
    </article>,
    document.getElementById('modal')
  );
}
