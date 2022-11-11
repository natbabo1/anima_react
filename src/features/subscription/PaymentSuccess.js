import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useModal } from "../../contexts/ModalContext";
function PaymentSuccess() {
  const navigate = useNavigate();

  const { getThisUser } = useAuth();
  const { closeModal } = useModal();

  useEffect(() => {
    setTimeout(() => {
      getThisUser();
      closeModal();
      navigate("/");
    }, 3000);
  }, [navigate, getThisUser, closeModal]);

  return (
    <div className="text-white flex flex-col align-middle justify-center w-full">
      <i className="block fa-regular fa-circle-check text-anima-green text-8xl"></i>
      <h2 className="block text-anima-green">Payment success</h2>
      <h3>redirecting you to homepage...</h3>
    </div>
  );
}

export default PaymentSuccess;
