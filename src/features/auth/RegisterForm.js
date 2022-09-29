import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/AuthContext';
import { useLoading } from '../../contexts/LoadingContext';
import { useModal } from '../../contexts/ModalContext';

function RegisterForm() {
  const { register } = useAuth();
  const { startLoading, stopLoading } = useLoading();
  const { closeModal } = useModal();

  const [input, setInput] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    gender: ''
  });

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      startLoading();
      await register(input);
      toast.success('Resgister Success');
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
      <div className="input-group mb-3">
        <span className="input-group-text border-0">Name</span>
        <div className="form-floating">
          <input
            type="text"
            className="form-control rounded-md"
            id="firstName"
            placeholder="First name"
            name="firstName"
            value={input.firstName}
            onChange={handleChangeInput}
          />
          <label htmlFor="firstName" className="form-label">
            First name
          </label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control rounded-md"
            id="lastName"
            placeholder="Last name"
            name="lastName"
            value={input.lastName}
            onChange={handleChangeInput}
          />
          <label htmlFor="lastName" className="form-label">
            Last name
          </label>
        </div>
      </div>
      <div className="d-flex justify-content-around mb-2">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="Male"
            value="Male"
            checked={input.gender === 'Male'}
            onChange={handleChangeInput}
          />
          <label className="form-check-label text-white" htmlFor="Male">
            Male
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="Female"
            value="Female"
            checked={input.gender === 'Female'}
            onChange={handleChangeInput}
          />
          <label className="form-check-label text-white" htmlFor="Female">
            Female
          </label>
        </div>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control rounded-md h-13"
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
          type="text"
          className="form-control rounded-md h-13"
          placeholder="Email"
          id="email"
          name="email"
          value={input.email}
          onChange={handleChangeInput}
        />
        <label htmlFor="email" className="form-label">
          Email
        </label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control rounded-md h-13"
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
      <div className="form-floating mb-4">
        <input
          type="password"
          className="form-control rounded-md h-13"
          placeholder="Confirm Password"
          id="confirmPassword"
          name="confirmPassword"
          value={input.confirmPassword}
          onChange={handleChangeInput}
        />
        <label htmlFor="confirmPassword" className="form-label">
          Confirm Password
        </label>
      </div>
      <div className="mb-2 d-grid">
        <button className="btn btn-success fw-bold rounded-md h-12 text-4.5">
          Register
        </button>
      </div>
    </form>
  );
}
export default RegisterForm;
