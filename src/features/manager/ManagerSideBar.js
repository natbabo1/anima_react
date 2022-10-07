import { useNavigate } from 'react-router-dom';
import Avatar from '../../components/ui/Avatar';
import { useAuth } from '../../contexts/AuthContext';

function ManagerSideBar({ selectMenu }) {
  const {
    user: { firstName, lastName, Subscription },
    logout
  } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="text-snow-white w-full">
      <div className="py-3 px-2 h-24 bg-gradient-to-b from-anima-green">
        <div className="flex justify-around items-center text-snow-white">
          <Avatar size="60" />
          <div className="text-xl">
            {firstName} {lastName}
            <small className="block">
              {Subscription
                ? `Your ${Subscription.Tier.name} subsription will expire after ${Subscription.endDate}`
                : 'No subscription'}
            </small>
          </div>
        </div>
      </div>
      <div
        className="py-5 px-8 text-xl hover:text-white hover:bg-medium-gray cursor-pointer"
        to="/watch-later"
        onClick={() => selectMenu('addAnime')}
      >
        <i className="fa-regular fa-square-plus mr-3"></i> New Anime
      </div>
      <div
        className="py-5 px-8 text-xl hover:text-white hover:bg-medium-gray cursor-pointer"
        to="/watch-later"
        onClick={() => selectMenu('editAnime')}
      >
        <i className="fa-regular fa-pen-to-square mr-3"></i> Edit Anime
      </div>
      <div
        className="py-5 px-8 text-xl hover:text-white hover:bg-medium-gray cursor-pointer"
        to="/watch-later"
        onClick={() => selectMenu('editEpisode')}
      >
        <i className="fa-solid fa-layer-group -ml-1 mr-3"></i> Episode List
      </div>
      <button
        className="py-5 px-8 text-xl text-left hover:text-white hover:bg-medium-gray w-full"
        onClick={handleLogout}
      >
        <i className="fa-solid fa-right-from-bracket mr-3"></i> Log out
      </button>
    </div>
  );
}

export default ManagerSideBar;
