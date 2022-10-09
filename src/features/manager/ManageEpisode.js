import { useState } from 'react';
import { toast } from 'react-toastify';
import { useLoading } from '../../contexts/LoadingContext';
import AnimeCard from '../../components/ui/card/AnimeCard';
import * as animeService from '../../api/animeApi';

function ManageEpisode() {
  const { startLoading, stopLoading } = useLoading();

  const [animes, setAnimes] = useState();
  const [searchTitle, setSearchTitle] = useState();
  const [animeToManage, setAnimeToManage] = useState();
  const [searched, setSearched] = useState();

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
      <form className="flex gap-3 ml-24 mb-10" onSubmit={handleSearchSubmit}>
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
      {animeToManage ? null : (
        <div className="w-full px-16 mx-auto flex flex-wrap mt-4 gap-x-3 gap-y-10 justify-around pd-10">
          {animes.map((anime) => (
            <div key={anime.id} onClick={() => setAnimeToManage(anime)}>
              <AnimeCard anime={anime} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ManageEpisode;
