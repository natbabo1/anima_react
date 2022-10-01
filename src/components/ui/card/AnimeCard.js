import { Link } from 'react-router-dom';
import bg from '../../../assets/images/animeBgCard.jpg';

function AnimeCard() {
  return (
    <Link to="">
      <div className="hover:scale-110 duration-200">
        <div className="w-56 pb-0 pt-[133%] relative overflow-hidden shadow-2xl ">
          <div className="absolute bottom-0 right-0 pr-2 pb-2 z-20">
            <h6 className="text-sm text-low-white">Updated to EP 12</h6>
          </div>
          <div className="bg-gradient-to-t from-black via-transparent w-full h-full absolute right-0 bottom-0 z-10"></div>
          <img
            src={bg}
            className="absolute w-auto h-full top-0 left-0"
            alt="Kaguya"
          />
        </div>
        <div className="px-2">
          <h2 className="text-xl whitespace-normal font-medium text-snow-white">
            Kaguya-sama: Love Is War -Ultra Romantic-
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default AnimeCard;
