import Router from './router/Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import './App.css';
import { useLoading } from './contexts/LoadingContext';
import Spinner from './components/ui/Spinner';
import Modal from './components/ui/Modal';

function App() {
  const { isLoading } = useLoading();
  return (
    <>
      {isLoading && <Spinner />}

      <Modal />
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
