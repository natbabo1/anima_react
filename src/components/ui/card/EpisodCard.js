import { Link } from 'react-router-dom';
import bg from '../../../assets/images/episodeBgCard.jpg';
function EpisodCard() {
  return (
    <Link to="">
      <div className="w-80 pb-0 pt-[50%] relative overflow-hidden shadow-2xl hover:scale-110 duration-200">
        <div className="absolute top-0 right-0 pr-2 pt-1 z-20">
          <h5 className="text-sm text-snow-white">Episode 1</h5>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 pr-2 pt-1 z-20">
          <h3 className="text-md text-snow-white">
            Miko Iino Wants to Be Soothed / Kaguya Doesn't Realize...
          </h3>
        </div>
        <div className="absolute bottom-0 right-0 pr-2 pb-2 z-20">
          <h6 className="text-xs text-low-white">
            <i className="fa-regular fa-clock"></i> 24 mins
          </h6>
        </div>
        <div className="bg-gradient-to-l from-black via-black/70 w-2/3 h-full absolute right-0 top-0 z-10"></div>
        <img
          src={bg}
          className="absolute w-auto h-full top-0 left-0"
          alt="Ep1"
        />
      </div>
    </Link>
  );
}

export default EpisodCard;
