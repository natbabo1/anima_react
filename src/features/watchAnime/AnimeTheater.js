import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useLoading } from '../../contexts/LoadingContext';
import CarouselFrame from '../../components/ui/carousel/CarouselFrame';
import EpisodeCard from '../../components/ui/card/EpisodeCard';
import TheaterSke from '../../components/ui/skeletons/TheaterSke';
import EpisodeCardSke from '../../components/ui/skeletons/EpisodeCardSke';
import * as episodeService from '../../api/episodeApi';
import { BASE_URL } from '../../config/constant';
import Theater from '../../components/ui/Theater';

const initialEpisodes = [
  <EpisodeCardSke key={'skeHightlight01'} />,
  <EpisodeCardSke key={'skeHightlight02'} />,
  <EpisodeCardSke key={'skeHightlight03'} />,
  <EpisodeCardSke key={'skeHightlight04'} />
];
function AnimeTheater() {
  const { startLoading, stopLoading } = useLoading();
  const { animeId, epNumber } = useParams();

  const [episodeList, setEpisodeList] = useState(null);
  const [currentEpSrc, setCurrentEpSrc] = useState(null);

  useEffect(() => {
    const fetchEpisodeList = async () => {
      try {
        startLoading();
        window.scrollTo(0, 0);
        const {
          data: { episodes }
        } = await episodeService.getEpisodeList(animeId);
        setEpisodeList(episodes);
      } catch (err) {
        toast.error(err.response?.data.message);
      } finally {
        stopLoading();
      }
    };

    fetchEpisodeList();
  }, [startLoading, stopLoading, animeId]);

  useEffect(() => {
    if (episodeList) {
      const thisEp = episodeList.find((item) => +item.number === +epNumber);
      if (thisEp !== -1) {
        return setCurrentEpSrc(BASE_URL + thisEp.videoPath);
      }
      return setCurrentEpSrc(null);
    }
  }, [epNumber, episodeList]);

  return (
    <>
      {!episodeList ? (
        <TheaterSke />
      ) : (
        <Theater key={currentEpSrc} src={currentEpSrc} />
      )}
      <div className="h-56 mt-24">
        <CarouselFrame
          content={
            !episodeList || episodeList.length === 0
              ? initialEpisodes
              : episodeList.map((item, idx) => (
                  <EpisodeCard key={idx} episode={item} />
                ))
          }
          perPage={4}
        />
      </div>
    </>
  );
}

export default AnimeTheater;
