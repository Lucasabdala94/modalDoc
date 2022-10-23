import React from 'react';
import Modal from './Modal';
import ModalPortal from './ModalPortal';
import useModal from './hooks/useModal';

export default function Modals() {
  //aplicacmos el hook para el primer modal.
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenModalPortal, openModalPortal, closeModalPortal] =
    useModal(false);

  return (
    <>
      <h1>modals</h1>
      <button onClick={openModal1}>Modal1</button>
      <hr />
      <button onClick={openModal2}>Modal2</button>
      <hr />
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h2>Titulo modal 1</h2>
        <p>contenido modal 1</p>
        <img src="https://placeimg.com/400/400/animals" alt="animales" />
      </Modal>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h2>Titulo modal 2</h2>
        <p>contenido modal 2 </p>
        <img src="https://placeimg.com/400/400/cities" alt="ciudad" />
      </Modal>
      <h1>modals Portal</h1>
      <button onClick={openModalPortal}>Modal Portal</button>
      <hr />
      <ModalPortal isOpen={isOpenModalPortal} closeModal={closeModalPortal}>
        <h2>Titulo modal portal</h2>
        <p>contenido modal portal </p>
        <img src="https://placeimg.com/400/400/cities" alt="ciudad" />
      </ModalPortal>
    </>
  );
}
