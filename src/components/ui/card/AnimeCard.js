import { Link } from "react-router-dom";
import GenreBadge from "./GenreBadge";
import { BASE_URL } from "../../../config/env";
import animeCardBg from "../../../assets/images/placeholder-image.png";

function AnimeCard({
  anime: { type, imagePath, title, Genres, Episodes = [] },
  to
}) {
  return (
    <div className="hover:scale-125 duration-200 w-[17.5rem] z-40 hover:z-50 hover:relative">
      <Link to={to}>
        <div className="w-full pb-0 pt-[133%] relative overflow-hidden shadow-2xl ">
          <div className="absolute bottom-0 right-0 pr-2 pb-2  z-20 hover:z-50">
            <h6 className="text-lg text-low-white">
              {type === "TV" && `Updated to EP ${Episodes.length}`}
            </h6>
          </div>
          <div className="bg-gradient-to-t from-black via-transparent w-full h-full absolute right-0 bottom-0 z-10"></div>
          <img
            src={
              imagePath
                ? imagePath.startsWith("public")
                  ? BASE_URL + "/" + imagePath
                  : imagePath
                : animeCardBg
            }
            className="absolute w-full h-auto top-0 left-0"
            alt={title}
          />
        </div>
        <h2 className="mt-2 px-2 text-2xl whitespace-normal font-normal text-snow-white">
          {title}
        </h2>
      </Link>
      <div className="px-2 mt-3">
        <div className="mt-4 w-full flex gap-3 flex-wrap">
          {Genres.map((item, idx) => (
            <GenreBadge key={idx}>{item.genre}</GenreBadge>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AnimeCard;
