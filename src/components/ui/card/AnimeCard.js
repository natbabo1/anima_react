import { Link } from 'react-router-dom';
import GenreBadge from './GenreBadge';
import bg from '../../../assets/images/animeBgCard.jpg';

function AnimeCard() {
  return (
    <Link to="">
      <div className="hover:scale-105 duration-200 w-[17.5rem]">
        <div className="w-full pb-0 pt-[133%] relative overflow-hidden shadow-2xl ">
          <div className="absolute bottom-0 right-0 pr-2 pb-2 z-20">
            <h6 className="text-lg text-low-white">Updated to EP 12</h6>
          </div>
          <div className="bg-gradient-to-t from-black via-transparent w-full h-full absolute right-0 bottom-0 z-10"></div>
          <img
            src={bg}
            className="absolute w-full h-auto top-0 left-0"
            alt="Kaguya"
          />
        </div>
        <div className="px-2 mt-3">
          <h2 className="text-2xl whitespace-normal font-normal text-snow-white">
            Kaguya-sama: Love Is War -Ultra Romantic-
          </h2>
          <div className="mt-4 w-full flex gap-3 flex-wrap">
            <GenreBadge>Action</GenreBadge>
            <GenreBadge>Comedy</GenreBadge>
            <GenreBadge>Romance</GenreBadge>
            <GenreBadge>Fantasy</GenreBadge>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default AnimeCard;
