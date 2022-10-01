import { useState } from 'react';
import EpisodCard from '../../components/ui/EpisodCard';

function HighlightEpisode() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-full relative -top-16">
      <div className="w-full h-16 bg-gradient-to-t from-dark-gray via-dark-gray/60 flex flex-col justify-end text-5xl text-snow-white px-12">
        Episodes
      </div>
      {/* Main Carousel */}
      <div className="carousel slide h-96 bg-dark-gray w-full relative overflow-hidden border border-orange-600">
        <div className="relative border-2 border-green-500">
          <div
            className={`duration-700 ease-in-out ${
              toggle ? 'flex justify-around ' : ''
            }`}
          >
            <EpisodCard />
            <EpisodCard />
            <EpisodCard />
            <EpisodCard />
          </div>
          <div className="hidden duration-700 ease-in-out">
            <EpisodCard />
            <EpisodCard />
            <EpisodCard />
            <EpisodCard />
          </div>
          <div className="hidden duration-700 ease-in-out">
            <EpisodCard />
            <EpisodCard />
            <EpisodCard />
            <EpisodCard />
          </div>
        </div>
        <button
          className="absolute top-0 left-0 z-30 flex justify-start items-center h-full cursor-pointer w-[5%] bg-gradient-to-r from-dark-gray"
          type="button"
          onClick={() => setToggle((prev) => !prev)}
        >
          <i class="fa-solid fa-chevron-left text-snow-white "></i>
        </button>
        <button
          className="absolute top-0 right-0 z-30 flex justify-end items-center h-full cursor-pointer w-[5%] bg-gradient-to-l from-dark-gray"
          type="button"
        >
          <i class="fa-solid fa-chevron-right text-snow-white"></i>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default HighlightEpisode;
