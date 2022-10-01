import HighlightEpisode from './HighlightEpisode';
import HightlightMain from './HightlightMain';
import AnimeList from './AnimeList';

function Highlight() {
  return (
    <>
      <HightlightMain />
      <HighlightEpisode />
      <AnimeList title="Popular" />
    </>
  );
}

export default Highlight;
