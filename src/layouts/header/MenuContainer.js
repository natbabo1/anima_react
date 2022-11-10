import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useModal } from "../../contexts/ModalContext";
import SubscriptionMenu from "../../features/subscription/SubscriptionMenu";
import MenuItem from "./MenuItem";
function MenuContainer() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { openFormModal } = useModal();

  const searchBar = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?title=${searchBar.current.value}`);
  };

  return (
    <div className="flex justify-between items-center grow">
      <div className="flex gap-5 ">
        <MenuItem menu="Home" to="/" />
        <MenuItem menu="This Season" to="/this-season" />
        <MenuItem menu="Movies" to="/movies" />
        <div
          className="text-low-white border-anima-green font-medium  hover:text-snow-white cursor-pointer"
          onClick={() =>
            openFormModal({
              header: "Subscription",
              body: <SubscriptionMenu />
            })
          }
        >
          Subscription
        </div>
      </div>
      {pathname.startsWith("/search") ? (
        ""
      ) : (
        <form className="flex gap-3" onSubmit={handleOnSubmit}>
          <input
            className="rounded-md border-none px-3 bg-medium-gray  focus:outline focus:outline-anima-green/80 caret-anima-green focus:ring-transparent "
            type="text"
            placeholder="Find your anime"
            ref={searchBar}
          />
          <button
            className="w-9 border-2 border-anima-green rounded-md aspect-square text-anima-green font-medium hover:bg-anima-green hover:text-white active:bg-anima-lime"
            type="submit"
          >
            <i className="fa-solid fa-magnifying-glass text-anima-green"></i>
          </button>
        </form>
      )}
    </div>
  );
}

export default MenuContainer;
