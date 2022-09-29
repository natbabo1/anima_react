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
    <form onSubmit={onSubmit}>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control rounded-md"
          id="username"
          placeholder="Username"
          name="username"
          value={input.username}
          onChange={handleChangeInput}
        />
        <label htmlFor="username" className="form-label">
          Username
        </label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control rounded-md"
          placeholder="Password"
          id="password"
          name="password"
          value={input.password}
          onChange={handleChangeInput}
        />
        <label htmlFor="password" className="form-label">
          Password
        </label>
      </div>
      <div className="mb-2 d-grid">
        <button className="btn btn-outline-success fw-bold rounded-md h-12 text-4.5">
          Log In
        </button>
      </div>
      <div className="mb-2 d-grid">
        <button className="btn btn-success fw-bold rounded-md h-12 text-4.5">
          Register
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
