import Router from './router/Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import './App.css';
import { useLoading } from './contexts/LoadingContext';
import Spinner from './components/ui/Spinner';
import { useModal } from './contexts/ModalContext';
import Modal from './components/ui/Modal';
import LoginForm from './features/auth/LoginForm';
import RegisterForm from './features/auth/RegisterForm';

function App() {
  const { isLoading } = useLoading();
  const { openModal } = useModal();
  return (
    <>
      {isLoading && <Spinner />}

      <Modal>
        {openModal === 'Login' && <LoginForm />}
        {openModal === 'Register' && <RegisterForm />}
      </Modal>
      <Router />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
