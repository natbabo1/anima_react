import { Link } from "react-router-dom";
import { BASE_URL } from "../../../config/env";
import episodeBg from "../../../assets/images/placeholder-image.png";

function EpisodCard({ episode, to }) {
  return (
    <div className="w-[27rem] duration-200 hover:scale-125 hover:z-50">
      <Link to={to}>
        <div className="w-full pb-0 pt-[50%] relative overflow-hidden shadow-2xl ">
          <div className="absolute top-0 right-0 pr-2 pt-1 z-20">
            <h5 className="text-sm text-snow-white">
              Episode {episode.number}
            </h5>
          </div>
          <div className="absolute top-1/2 left-[57%] -translate-y-1/2 pt-1 z-20 w-[40%] h-1/2 flex text-lg text-snow-white  items-center whitespace-pre-wrap text-ellipsis overflow-hidden">
            {episode.title}
          </div>
          <div className="absolute bottom-0 right-2 pr-2 pb-2 z-20">
            <h6 className="text-base text-low-white">
              <i className="fa-regular fa-clock mr-2"></i>
              {episode.duration ? (episode.duration / 60).toFixed(0) : 0} mins
            </h6>
          </div>
          <div className="bg-gradient-to-l from-black via-black/70 w-2/3 h-full absolute right-0 top-0 z-10"></div>
          <img
            src={
              episode.imagePath
                ? episode.imagePath.startsWith("public")
                  ? `${BASE_URL}/${episode.imagePath}`
                  : episode.imagePath
                : episodeBg
            }
            className="absolute w-auto h-full top-0 left-0"
            alt={`Ep${episode.number}`}
          />
        </div>
      </Link>
    </div>
  );
}

export default EpisodCard;
