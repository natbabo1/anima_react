import { Link, useNavigate } from "react-router-dom";
import Avatar from "../../components/ui/Avatar";
import { useAuth } from "../../contexts/AuthContext";

function DropdownMenu() {
  const {
    user: { username, firstName, lastName, Subscription },
    logout
  } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="flex flex-col absolute right-1/4 top-full -translate-x-1/2 w-48 z-50 align-top">
      <div
        className="dropdown-user-triangle ml-auto translate-x-[5.5rem]"
        style={{ zIndex: 1020 }}
      ></div>
      <div className="flex flex-col bg-dark-gray pt-0 px-0 border border-shadow-grow rounded-xl w-72">
        <Link
          className="py-3 px-2 bg-gradient-to-b from-anima-green rounded-t-md"
          to="/profile"
        >
          <div className="flex justify-around items-center text-snow-white">
            <Avatar size="50" />
            <div className="ms-3">
              {firstName} {lastName}
              <small className="block">
                {Subscription
                  ? `${Subscription.Tier.name}, Expire ${Subscription.endDate}`
                  : "No subscription"}
              </small>
            </div>
          </div>
        </Link>
        {username === "ADMIN" ? (
          <Link
            className=" py-3 px-4 text-lg hover:text-white hover:bg-medium-gray"
            to="/anima-manager"
          >
            <i className="fa-solid fa-photo-film"></i> Anima Manager
          </Link>
        ) : (
          <>
            <Link
              className=" py-3 px-4 text-lg hover:text-white hover:bg-medium-gray"
              to="/watch-later"
            >
              <i className="fa-regular fa-bookmark w-6"></i> Watch Later
            </Link>

            <Link
              className=" py-3 px-4 text-lg hover:text-white hover:bg-medium-gray"
              to="/favorites"
            >
              <i className="fa-regular fa-heart w-6"></i> Favorite
            </Link>
          </>
        )}

        <button
          className="py-3 px-4 text-lg text-left hover:text-white hover:bg-medium-gray"
          onClick={handleLogout}
        >
          <i className="fa-solid fa-right-from-bracket w-6"></i>Log out
        </button>
      </div>
    </div>
  );
}

export default DropdownMenu;
