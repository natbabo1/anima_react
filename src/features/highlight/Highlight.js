import HighlightEpisode from './HighlightEpisode';
import HightlightMain from './HightlightMain';
import AnimeList from './AnimeList';

function Highlight() {
  return (
    <>
      <HightlightMain />
      <HighlightEpisode />
      <AnimeList title="Popular" />
      <AnimeList title="This Season" />
      <AnimeList title="Movies" />
    </>
  );
}

export default Highlight;
