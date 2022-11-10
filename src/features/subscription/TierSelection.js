import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useLoading } from "../../contexts/LoadingContext";
import TierItem from "./TierItem";
import * as tierService from "../../api/tierApi";
import * as paymentService from "../../api/paymentApi";
import { OMISE_PUBLIC_KEY } from "../../config/env";
import { useModal } from "../../contexts/ModalContext";
import PaymentSuccess from "./PaymentSuccess";

function TierSelection() {
  const { startLoading, stopLoading } = useLoading();
  const { openFormModal } = useModal();

  const [tiers, setTiers] = useState([]);
  const [selectedTier, setSelectedTier] = useState(null);

  useEffect(() => {
    const fetchTiers = async () => {
      try {
        const {
          data: { tiers: newTiers }
        } = await tierService.getAllTiers();
        setTiers(newTiers);
      } catch (err) {
        console.log(err);
        toast.error(err.response?.data?.message);
      }
    };
    fetchTiers();
  }, []);

  const selectTier = (tier) => setSelectedTier(tier);

  let OmiseCard;
  OmiseCard = window.OmiseCard;
  OmiseCard.configure({
    publicKey: OMISE_PUBLIC_KEY,
    currency: "THB",
    frameLabel: "ANIMA",
    image: "",
    submitLabel: "Pay NOW",
    buttonLabel: "Pay with Omise"
  });

  const creditCardConfigure = () => {
    OmiseCard.configure({
      defaultPaymentMethod: "credit_card",
      otherPaymentMethods: []
    });
    OmiseCard.configureButton("#credit-card");
    OmiseCard.attach();
  };

  const omiseCardHandler = () => {
    OmiseCard.open({
      amount: selectedTier.price * 100,
      onCreateTokenSuccess: async (token) => {
        try {
          startLoading();
          await paymentService.buySubscription({
            amount: selectedTier.price,
            tierId: selectedTier.id,
            token: token
          });
          openFormModal({
            header: "Payment Success",
            body: <PaymentSuccess />
          });
        } catch (err) {
          console.log(err);
          toast.error(err.response?.data?.message);
        } finally {
          stopLoading();
        }
      },

      onFormClosed: () => {}
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      creditCardConfigure();
      omiseCardHandler();
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message);
    }
  };

  return (
    <form className="flex flex-wrap mt-4 gap-y-2" onSubmit={handleSubmit}>
      <h3 className="text-low-white font-semibold">Select Subscription Tier</h3>
      {tiers.map((item) => (
        <TierItem
          key={item.id}
          tier={item}
          onSelect={selectTier}
          selected={+item.id === selectedTier?.id}
        />
      ))}
      <button
        disabled={!selectedTier}
        id="credit-card"
        type="button"
        className={`w-full h-10 rounded-md border-2 mt-3 ${
          selectedTier
            ? "border-anima-green py-1 px-3 text-white font-medium bg-anima-green hover:bg-anima-lime hover:text-medium-gray active:bg-anima-lime"
            : "border-medium-gray bg-medium-gray"
        }`}
        onClick={handleSubmit}
      >
        BUY NOW
      </button>
    </form>
  );
}

export default TierSelection;
