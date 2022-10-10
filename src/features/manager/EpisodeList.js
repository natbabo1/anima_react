import EpisodeCard from '../../components/ui/card/EpisodeCard';
function EpisodeList({ episodes, onClick }) {
  return (
    <>
      {episodes.map((ep) => (
        <div key={ep.id} onClick={() => onClick(ep)}>
          <EpisodeCard episode={ep} />
        </div>
      ))}
    </>
  );
}

export default EpisodeList;
