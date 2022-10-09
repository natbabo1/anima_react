import { useState } from 'react';
import ManagerSideBar from './ManagerSideBar';
import AnimeForm from './AnimeForm';
import EditAnime from './EditAnime';
import EditEpisode from './EditEpisode';
import * as animeService from '../../api/animeApi';

function ManagerContainer() {
  const [selectedMenu, setSelectedMenu] = useState('addAnime');

  const onSubmit = async (formData) => {
    animeService.createAnime(formData);
  };

  const menu = {
    addAnime: <AnimeForm onSubmit={onSubmit} />,
    editAnime: <EditAnime />,
    editEpisode: <EditEpisode />
  };

  return (
    <div className="w-full mt-20 flex min-h-screen">
      <div className="w-56 shrink-0">
        <ManagerSideBar selectMenu={setSelectedMenu} />
      </div>
      <div className="bg-black pb-10 grow mx-auto">{menu[selectedMenu]}</div>
    </div>
  );
}

export default ManagerContainer;
