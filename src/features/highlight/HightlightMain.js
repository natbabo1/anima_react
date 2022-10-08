import { BASE_URL } from '../../config/constant';
import HighlightPlayButton from '../../components/ui/HighlightPlayButton';
import HighlightGenreBadge from '../../components/HighlightGenreBadge';
import { Link } from 'react-router-dom';

function HightlightMain({ highlight }) {
  const {
    id,
    title,
    synopsis,
    highlightImagePath,
    avgReviewScore,
    Rating,
    Episodes,
    Genres,
    duration
  } = highlight;
  return (
    <div className="w-full px-0 relative pt-[46.25%] overflow-hidden">
      <img
        src={`${BASE_URL}/${highlightImagePath}`}
        className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-auto "
        alt={title}
      />
      <div className="absolute top-0 left-0 w-full h-full flex bg-gradient-to-l from-black">
        <div className="w-1/2 h-full relative">
          <Link
            to={`animes/${id}/ep/1`}
            className="absolute bottom-[15%] left-[10%] cursor-pointer"
          >
            <HighlightPlayButton />
          </Link>
        </div>
        <div className="w-1/2 pl-14 text-snow-white flex flex-col justify-center">
          <div className="text-6xl leading-[5rem] w-4/5">{title}</div>
          <p className="text-2xl mt-10 w-4/5 whitespace-normal ">
            {synopsis.slice(0, 350) + '...'}
          </p>
          <p className="mt-10 text-xl">
            <span className="fw-bold">Ratings:</span>{' '}
            {`${avgReviewScore.toFixed(1)} | ${Rating.rating}`}
          </p>
          <div className="text-xl mt-1 flex items-center gap-2">
            <span className="block mr-3">Genre:</span>
            {Genres.map((item, idx) => (
              <HighlightGenreBadge key={'mainBadge' + idx}>
                {item.genre}
              </HighlightGenreBadge>
            ))}
          </div>
          <p className="text-xl">
            <span className="fw-bold">Duration:</span> {duration / 1000 / 60}{' '}
            mins per Ep | {Episodes.length} Ep
          </p>
        </div>
      </div>
    </div>
  );
}

export default HightlightMain;
