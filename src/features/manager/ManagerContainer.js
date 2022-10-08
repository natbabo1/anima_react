import { useState } from 'react';
import ManagerSideBar from './ManagerSideBar';
import AddAnime from './AddAnime';
import EditAnime from './EditAnime';
import EditEpisode from './EditEpisode';

function ManagerContainer() {
  const [selectedMenu, setSelectedMenu] = useState('addAnime');

  const menu = {
    addAnime: <AddAnime />,
    editAnime: <EditAnime />,
    editEpisode: <EditEpisode />
  };

  return (
    <div className="w-full mt-20 flex ">
      <div className="w-56 ">
        <ManagerSideBar selectMenu={setSelectedMenu} />
      </div>
      <div className="bg-black grow pb-10">{menu[selectedMenu]}</div>
    </div>
  );
}

export default ManagerContainer;
