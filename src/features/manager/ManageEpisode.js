import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useLoading } from '../../contexts/LoadingContext';
import EpisodeForm from './EpisodeForm';
import AnimeCard from '../../components/ui/card/AnimeCard';
import EpisodeCard from '../../components/ui/card/EpisodeCard';
import * as animeService from '../../api/animeApi';
import * as episodeService from '../../api/episodeApi';

function ManageEpisode() {
  const { startLoading, stopLoading } = useLoading();

  const [animes, setAnimes] = useState([]);
  const [animeToManage, setAnimeToManage] = useState();
  const [searchTitle, setSearchTitle] = useState('');
  const [searched, setSearched] = useState('');

  const [episodes, setEpisodes] = useState([]);
  const [episodeToEdit, setEpisodeToEdit] = useState();

  const fetchEpisode = async (animeId) => {
    try {
      const res = await episodeService.getEpisodeList(animeId);
      setEpisodes([...res.data.episodes]);
    } catch (err) {
      toast.error(err.response?.data.message);
    }
  };

  useEffect(() => {
    if (animeToManage) {
      fetchEpisode(animeToManage.id);
    } else {
      setEpisodes(false);
    }
  }, [animeToManage]);

  const onDelete = async () => {
    try {
      startLoading();
      await episodeService.deleteEpisode(animeToManage.id, episodeToEdit.id);
      setEpisodes(episodes.filter((item) => +item.id !== +episodeToEdit.id));
      setEpisodeToEdit(null);
      toast.success('delete success');
    } catch (err) {
      toast.error(err.response?.data.message);
    } finally {
      stopLoading();
    }
  };

  const onCancel = () => {
    setEpisodeToEdit(null);
  };

  const onCreate = async (formData) => {
    const {
      data: { episode }
    } = await episodeService.createEpisode(formData, animeToManage.id);
    setEpisodes([...episodes, episode]);
  };

  const onUpdate = async (formData) => {
    await episodeService.updateEpisode(
      formData,
      animeToManage.id,
      episodeToEdit.id
    );
    fetchEpisode(animeToManage.id);
    setEpisodeToEdit(null);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      startLoading();
      setAnimeToManage(null);
      const res = await animeService.searchAnimeByTitle(searchTitle);
      const animes = res.data.animes;
      setSearched(searchTitle);
      setAnimes(animes);
    } catch (err) {
      toast.error(err.response?.data.message);
    } finally {
      stopLoading();
    }
  };

  return (
    <div className="text-snow-white pt-10 pb-36`">
      <h1 className="text-4xl ml-24 mb-10">
        Search and Select Anime to Manage Episodes
      </h1>
      <form className="flex gap-3 ml-24 mb-2" onSubmit={handleSearchSubmit}>
        <input
          className="rounded-md border-none px-3 bg-medium-gray  focus:outline focus:outline-anima-green/80 caret-anima-green focus:ring-transparent "
          type="text"
          placeholder="Find anime to edit"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
        />
        <button
          className="w-9 border-2 border-anima-green rounded-md aspect-square text-anima-green font-medium hover:bg-anima-green hover:text-white active:bg-anima-lime"
          type="submit"
        >
          <i className="fa-solid fa-magnifying-glass text-anima-green"></i>
        </button>
        {searched && (
          <h2 className="ml-4 text-3xl text-medium-gray">
            Search for//{' '}
            <span className="text-anima-green ml-8">{searched}: </span>
            <span className="text-low-white ml-3">
              {animes.length} animes found
            </span>
          </h2>
        )}
      </form>
      {animeToManage && (
        <EpisodeForm
          episodeToEdit={episodeToEdit}
          animeId={animeToManage.id}
          onDelete={onDelete}
          onCancel={onCancel}
          onSubmit={episodeToEdit ? onUpdate : onCreate}
        />
      )}
      <div className="w-full px-24 mx-auto flex flex-wrap mt-4 gap-x-3 gap-y-10 justify-around pd-10">
        {animeToManage ? (
          <>
            {episodes.length > 0 &&
              episodes?.map((ep) => (
                <div key={ep.id} onClick={() => setEpisodeToEdit(ep)}>
                  <EpisodeCard episode={ep} />
                </div>
              ))}
          </>
        ) : (
          <>
            {animes.map((anime) => (
              <div key={anime.id} onClick={() => setAnimeToManage(anime)}>
                <AnimeCard anime={anime} />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default ManageEpisode;
