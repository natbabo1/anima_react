import { useModal } from '../../contexts/ModalContext';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function AuthBotton() {
  const { openFormModal } = useModal();
  return (
    <>
      <div className="flex gap-3">
        <button
          className="w-fit h-fit rounded-md border-2 border-anima-green py-1 px-3 text-anima-green font-medium hover:bg-anima-green hover:text-white active:bg-anima-lime"
          type="button"
          onClick={() =>
            openFormModal({ header: 'Login', body: <LoginForm /> })
          }
        >
          Login
        </button>
        <button
          className="w-fit h-fit rounded-md border-2 border-anima-green py-1 px-3 text-white font-medium bg-anima-green hover:bg-anima-lime hover:text-medium-gray active:bg-anima-lime"
          type="button"
          onClick={() =>
            openFormModal({ header: 'Register', body: <RegisterForm /> })
          }
        >
          Register
        </button>
      </div>
    </>
  );
}

export default AuthBotton;
