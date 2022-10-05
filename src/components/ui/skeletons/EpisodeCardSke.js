import { Link } from 'react-router-dom';

function EpisodeCardSke() {
  return (
    <Link to="">
      <div className="w-[27rem] pb-0 pt-[50%] relative overflow-hidden shadow-2xl animate-pulse bg-stone-900">
        <div className="absolute top-0 right-0 pr-2 pt-1 z-20">
          <div className="w-20 mt-1 mr-1 h-3 bg-zinc-800 rounded-full"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 pr-2 pt-1 z-20">
          <div className="w-48 mb-1 h-3 bg-zinc-800 rounded-full"></div>
          <div className="w-48 mb-1 h-3 bg-zinc-800 rounded-full"></div>
          <div className="w-48 mb-1 h-3 bg-zinc-800 rounded-full"></div>
          <div className="w-48 mb-1 h-3 bg-zinc-800 rounded-full"></div>
        </div>
        <div className="absolute bottom-0 right-0 pr-2 pb-2 z-20">
          <div className="w-20 mb-1 mr-1 h-3 bg-zinc-800 rounded-full"></div>
        </div>
      </div>
    </Link>
  );
}

export default EpisodeCardSke;
