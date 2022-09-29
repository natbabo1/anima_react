import { useModal } from '../../contexts/ModalContext';

function AuthBotton() {
  const { openFormModal } = useModal();
  return (
    <>
      <div className="d-flex ms-4">
        <button
          className="btn btn-outline-success me-2"
          type="button"
          onClick={() => openFormModal('Login')}
        >
          Login
        </button>
        <button
          className="btn btn-success"
          type="button"
          onClick={() => openFormModal('Register')}
        >
          Register
        </button>
      </div>
    </>
  );
}

export default AuthBotton;
