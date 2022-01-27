import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const Backdrop = props => {
  return <div className={styles.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = props => {
  return (
    <div className={styles.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const Modal = props => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById('modal-root')
      )}
    </Fragment>
  );
};

export default Modal;
