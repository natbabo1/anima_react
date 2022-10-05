import { useModal } from '../../contexts/ModalContext';
function Modal({ children }) {
  const { openModal, closeModal } = useModal();

  return (
    <>
      {openModal && (
        <div
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full flex justify-center items-center bg-black/80"
          tabIndex={-1}
          onClick={closeModal}
        >
          <div
            className="relative p-10 w-full max-w-xl h-full md:h-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-dark-gray rounded-xl shadow py-6 border border-medium-gray animate-modal">
              <div className="text-4xl font-semibold text-anima-green flex">
                <h5 className="modal-title text-success mx-auto fs-2 mb-10">
                  {openModal}
                </h5>
                <button
                  type="button"
                  className="absolute right-4 top-1.5 translate-middle mt-1 mr-1"
                  onClick={closeModal}
                >
                  <i className="fa-solid fa-xmark text-low-white/70 text-3xl"></i>
                </button>
              </div>
              <div className="w-full px-8">{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
