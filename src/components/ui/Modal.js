import { useEffect, useRef, useState } from 'react';
import { Modal as BsModal } from 'bootstrap';
import { useModal } from '../../contexts/ModalContext';

function Modal({ children }) {
  const { openModal, closeModal } = useModal();
  const modalEl = useRef();
  const [modal, setModal] = useState(null);

  useEffect(() => {
    const modalObj = new BsModal(modalEl.current);
    setModal(modalObj);
  }, []);

  useEffect(() => {
    if (openModal) {
      return modal.show();
    }
    modal?.hide();
  }, [openModal, modal]);

  return (
    <div
      className="modal fade"
      tabIndex={-1}
      ref={modalEl}
      onClick={closeModal}
    >
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content bg-dark px-4">
          <div className="modal-header mt-2" style={{ border: 'none' }}>
            <h5 className="modal-title text-success mx-auto fs-2">
              {openModal}
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white position-absolute end-0 translate-middle mt-1 me-1"
              onClick={closeModal}
            ></button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
