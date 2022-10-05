import { Link } from 'react-router-dom';
function EpisodCard({ episode }) {
  return (
    <Link to="">
      <div className="w-[27rem] pb-0 pt-[50%] relative overflow-hidden shadow-2xl hover:scale-125 duration-200 hover:z-50">
        <div className="absolute top-0 right-0 pr-2 pt-1 z-20">
          <h5 className="text-sm text-snow-white">Episode {episode.number}</h5>
        </div>
        <div className="absolute top-1/2 left-[57%] -translate-y-1/2 pr-2 pt-1 z-20">
          <h3 className="text-lg text-snow-white">
            {episode.title.slice(0, 52) + (episode.title.length > 51 && '...')}
          </h3>
        </div>
        <div className="absolute bottom-0 right-2 pr-2 pb-2 z-20">
          <h6 className="text-base text-low-white">
            <i className="fa-regular fa-clock mr-2"></i>
            {(episode.duration / 60).toFixed(0)} mins
          </h6>
        </div>
        <div className="bg-gradient-to-l from-black via-black/70 w-2/3 h-full absolute right-0 top-0 z-10"></div>
        <img
          src={episode.imagePath}
          className="absolute w-auto h-full top-0 left-0"
          alt="Ep1"
        />
      </div>
    </Link>
  );
}

export default EpisodCard;
