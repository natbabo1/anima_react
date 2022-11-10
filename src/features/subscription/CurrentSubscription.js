import { useAuth } from "../../contexts/AuthContext";

function CurrentSubscription() {
  const {
    user: { Subscription }
  } = useAuth();

  return (
    <div className="w-full h-28 pt-4 pb-3 px-4 border border-anima-green rounded-lg">
      <h2 className="block text-anima-green font-semibold text-xl">
        {Subscription ? Subscription.Tier?.name : "No Subscription"}
      </h2>
      <h3 className="block text-low-white mt-5">
        {Subscription
          ? `Expired: ${Subscription.endDate}`
          : "Please select subscription tier"}
      </h3>
    </div>
  );
}

export default CurrentSubscription;
