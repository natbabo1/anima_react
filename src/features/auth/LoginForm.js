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
          className="rounded-md px-3 bg-medium-gray border-none focus:outline focus:outline-anima-green/80 caret-anima-green focus:border-none w-full appearance-none peer pt-5 text-low-white focus:ring-transparent"
          id="username"
          placeholder=" "
          name="username"
          value={input.username}
          onChange={handleChangeInput}
        />
        <label
          htmlFor="username"
          className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-anima-green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
        >
          Username
        </label>
      </div>
      <div className="relative mb-3">
        <input
          type="password"
          className="rounded-md px-3 bg-medium-gray border-none focus:outline focus:outline-anima-green/80 caret-anima-green focus:border-none w-full appearance-none peer pt-5 text-low-white focus:ring-transparent"
          placeholder=" "
          id="password"
          name="password"
          value={input.password}
          onChange={handleChangeInput}
        />
        <label
          htmlFor="password"
          className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-anima-green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
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
