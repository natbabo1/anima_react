import { createContext, useCallback, useContext, useState } from 'react';

const ModalContext = createContext();

function ModalContextProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);

  const openFormModal = useCallback((form) => setOpenModal(form), []);

  const closeModal = useCallback(() => setOpenModal(false), []);

  return (
    <ModalContext.Provider value={{ openModal, openFormModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalContextProvider;

export const useModal = () => useContext(ModalContext);
