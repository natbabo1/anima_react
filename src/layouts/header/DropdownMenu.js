import { Link } from 'react-router-dom';
import Avatar from '../../components/ui/Avatar';
import { useAuth } from '../../contexts/AuthContext';

function DropdownMenu() {
  const {
    user: { firstName, lastName, Subscription },
    logout
  } = useAuth();

  return (
    <>
      <div
        className="dropdown-user-triangle mx-auto position-absolute start-50 translate-middle-x"
        style={{ zIndex: 1020 }}
      ></div>
      <div className="dropdown-menu dropdown-menu-dark pt-0 position-absolute top-8px start-50 translate-middle-x d-block ">
        <Link
          className="dropdown-item py-3 user-dropdown-badge rounded-top"
          to="/profile"
        >
          <div className="d-flex justify-content-between text-low-white">
            <Avatar size="55" />
            <div className="ms-3">
              {firstName} {lastName}
              <small className="d-block">
                {Subscription
                  ? `Your ${Subscription.Tier.name} subsription will expire after ${Subscription.endDate}`
                  : 'No subscription'}
              </small>
            </div>
          </div>
        </Link>

        <Link className="dropdown-item py-2" to="/watch-later">
          <i className="fa-regular fa-bookmark me-2"></i> Watch Later
        </Link>

        <Link className="dropdown-item py-2" to="/favorites">
          <i className="fa-regular fa-heart me-2"></i>Favorite
        </Link>

        <button className="dropdown-item  py-2" onClick={logout}>
          <i className="fa-solid fa-right-from-bracket me-2"></i>Log out
        </button>
      </div>
    </>
  );
}

export default DropdownMenu;
