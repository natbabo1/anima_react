import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useLoading } from '../../contexts/LoadingContext';
import HighlightEpisode from './HighlightEpisode';
import HightlightMain from './HightlightMain';
import AnimeList from './AnimeList';
import * as animeService from '../../api/animeApi';

function Highlight() {
  const { startLoading, stopLoading } = useLoading();
  const [highlight, setHighlight] = useState(null);

  useEffect(() => {
    const getHighlight = async () => {
      try {
        startLoading();
        const res = await animeService.getHighlight();
        setHighlight(res.data.anime);
      } catch (err) {
        toast.error(err.response.data.massage);
      } finally {
        stopLoading();
      }
    };

    getHighlight();

    return () => setHighlight(null);
  }, [stopLoading, startLoading]);

  //INSERT SKELETON HERE
  return (
    <>
      {highlight && (
        <>
          <HightlightMain highlight={highlight} />
          <HighlightEpisode content={highlight.Episodes} />
          <AnimeList title="Popular" />
          <AnimeList title="This Season" />
          <AnimeList title="Movie" />
        </>
      )}
    </>
  );
}

export default Highlight;
