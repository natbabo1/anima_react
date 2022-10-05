import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import CarouselFrame from '../../components/ui/carousel/CarouselFrame';
import AnimeCard from '../../components/ui/card/AnimeCard';
import * as animeService from '../../api/animeApi';

function PopularAnime({ title }) {
  const [animes, setAnimes] = useState(null);

  useEffect(() => {
    const getAnimes = async () => {
      try {
        const res = await animeService.getAnimesBy(title, 30);
        setAnimes(res.data.animes);
      } catch (err) {
        toast.error(err.response?.data.message);
      }
    };

    getAnimes();
  }, [title]);

  return (
    <>
      {animes && (
        <>
          <div className="w-full h-16 bg-dark-gray flex flex-col justify-end text-4xl text-snow-white px-12 mt-4">
            {title}
          </div>
          <div className="bg-dark-gray h-[33rem] mt-5">
            <CarouselFrame
              content={animes.map((item) => (
                <AnimeCard key={item.id} anime={item} />
              ))}
              perPage={6}
            />
          </div>
        </>
      )}
    </>
  );
}

export default PopularAnime;
