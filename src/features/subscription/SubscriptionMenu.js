import { useAuth } from "../../contexts/AuthContext";
import CurrentSubscription from "./CurrentSubscription";
import TierSelection from "./TierSelection";

function SubscriptionMenu() {
  const { user } = useAuth();

  return (
    <>
      {user ? (
        <>
          <CurrentSubscription />
          {user.Subscription ? "" : <TierSelection />}
        </>
      ) : (
        <h2 className="text-anima-green text-xl">
          Please log in to view your subscription
        </h2>
      )}
    </>
  );
}

export default SubscriptionMenu;
