import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import * as animeService from '../api/animeApi';
import * as miscService from '../api/miscApi';
import AnimeCard from '../components/ui/card/AnimeCard';

function ThisSeason() {
  const [season, setSeason] = useState({ season: '', year: null });
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    const fetchSeason = async () => {
      try {
        const res = await animeService.getAnimesBy('This Season', 30);
        const {
          data: { year, season }
        } = await miscService.getSeason();
        setAnimes(res.data.animes);
        setSeason({ year, season: season[0].toUpperCase() + season.slice(1) });
      } catch (err) {
        toast.error(err.response?.data.message);
      }
    };

    fetchSeason();
  }, []);

  return (
    <div className=" mt-32 min-h-screen">
      <div className="pl-32 text-4xl text-low-white mb-24">
        Current Season:{' '}
        {season?.season ? (
          <>
            <span className="text-5xl mx-4 text-anima-green">
              {season.season}
            </span>{' '}
            {season.year}{' '}
          </>
        ) : null}
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

export default ThisSeason;
