import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/AuthContext';
import { useLoading } from '../../contexts/LoadingContext';
import { useModal } from '../../contexts/ModalContext';

function LoginForm() {
  const { startLoading, stopLoading } = useLoading();
  const { login } = useAuth();
  const { closeModal } = useModal();

  const [input, setInput] = useState({ username: '', password: '' });

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      startLoading();
      await login(input);
      toast.success('Login Success');
      closeModal();
    } catch (err) {
      toast.error(err.response.data.message);
      console.log(err);
    } finally {
      stopLoading();
    }
  };

  return (
    <form className="w-full mx-auto" onSubmit={onSubmit}>
      <div className="relative mb-3">
        <input
          type="text"
          className="input-form peer"
          id="username"
          placeholder=" "
          name="username"
          value={input.username}
          onChange={handleChangeInput}
        />
        <label
          htmlFor="username"
          className="floating-label peer-focus:text-anima-green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
        >
          Username
        </label>
      </div>
      <div className="relative mb-3">
        <input
          type="password"
          className="input-form peer"
          placeholder=" "
          id="password"
          name="password"
          value={input.password}
          onChange={handleChangeInput}
        />
        <label
          htmlFor="password"
          className="floating-label peer-focus:text-anima-green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
        >
          Password
        </label>
      </div>
      <div className="mt-8">
        <button className="w-full h-10 rounded-md border-2 border-anima-green py-1 px-3 text-anima-green font-medium hover:bg-anima-green hover:text-white active:bg-anima-lime">
          Log In
        </button>
      </div>
      <div className="mt-3">
        <button className="w-full h-10 rounded-md border-2 border-anima-green py-1 px-3 text-white font-medium bg-anima-green hover:bg-anima-lime hover:text-medium-gray active:bg-anima-lime">
          Register
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
