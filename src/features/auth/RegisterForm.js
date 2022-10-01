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
    <form className="w-full mx-auto" onSubmit={onSubmit}>
      <div className="flex items-center gap-1 mb-3">
        <div className="relative grow mb-3">
          <input
            type="text"
            className="input-form peer"
            id="firstName"
            placeholder=" "
            name="firstName"
            value={input.firstName}
            onChange={handleChangeInput}
          />
          <label
            htmlFor="firstName"
            className="floating-label peer-focus:text-anima-green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            First name
          </label>
        </div>
        <div className="relative grow mb-3">
          <input
            type="text"
            className="input-form peer"
            id="lastName"
            placeholder=" "
            name="lastName"
            value={input.lastName}
            onChange={handleChangeInput}
          />
          <label
            htmlFor="lastName"
            className="floating-label peer-focus:text-anima-green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            Last name
          </label>
        </div>
      </div>
      <div className="flex justify-around mb-4">
        <div className="flex items-center gap-2">
          <input
            className="bg-medium-gray checked:bg-anima-green focus:ring-anima-lime/50"
            type="radio"
            name="gender"
            id="Male"
            value="Male"
            checked={input.gender === 'Male'}
            onChange={handleChangeInput}
          />
          <label className="text-snow-white" htmlFor="Male">
            Male
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input
            className="bg-medium-gray checked:bg-anima-green focus:ring-anima-lime/50"
            type="radio"
            name="gender"
            id="Female"
            value="Female"
            checked={input.gender === 'Female'}
            onChange={handleChangeInput}
          />
          <label className="text-snow-white" htmlFor="Female">
            Female
          </label>
        </div>
      </div>
      <div className="relative grow mb-3">
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
      <div className="relative grow mb-3">
        <input
          type="text"
          className="input-form peer"
          placeholder=" "
          id="email"
          name="email"
          value={input.email}
          onChange={handleChangeInput}
        />
        <label
          htmlFor="email"
          className="floating-label peer-focus:text-anima-green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
        >
          Email
        </label>
      </div>
      <div className="relative grow mb-3">
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
      <div className="relative grow mb-3">
        <input
          type="password"
          className="input-form peer"
          placeholder=" "
          id="confirmPassword"
          name="confirmPassword"
          value={input.confirmPassword}
          onChange={handleChangeInput}
        />
        <label
          htmlFor="confirmPassword"
          className="floating-label peer-focus:text-anima-green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
        >
          Confirm Password
        </label>
      </div>
      <div className="mt-8">
        <button className="w-full h-10 rounded-md border-2 border-anima-green py-1 px-3 text-white font-medium bg-anima-green hover:bg-anima-lime hover:text-medium-gray active:bg-anima-lime">
          Register
        </button>
      </div>
    </form>
  );
}
export default RegisterForm;
