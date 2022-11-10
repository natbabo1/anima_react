import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import * as animeService from '../api/animeApi';
import AnimeCard from '../components/ui/card/AnimeCard';

function Movies() {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    const fetchSeason = async () => {
      try {
        const res = await animeService.getAnimesBy('Movie', 30);

        setAnimes(res.data.animes);
      } catch (err) {
        toast.error(err.response?.data.message);
      }
    };

    fetchSeason();
  }, []);

  return (
    <div className=" mt-32 min-h-screen">
      <div className="pl-32 text-4xl text-low-white mb-24">
        The
        <span className="text-5xl mx-4 text-anima-green">Movies</span>
      </div>
      <div className="w-full mb-16 px-16 mx-auto flex flex-wrap mt-4 gap-x-3 gap-y-10 justify-around pd-10">
        {animes.map((anime) => (
          <AnimeCard
            key={anime.id}
            anime={anime}
            to={`/animes/${anime.id}/ep/1`}
          />
        ))}
      </div>
    </div>
  );
}

export default Movies;
