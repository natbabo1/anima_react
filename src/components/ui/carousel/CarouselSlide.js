import EpisodCard from '../card/EpisodCard';

function CorouselSlide({ page, pageNo, content }) {
  return (
    <div
      className={`absolute left-0 px-12 duration-700 ease-in flex justify-around items-center shrink-0 w-[100vw] h-full`}
      style={{ transform: `translateX(${100 * (pageNo - page)}%)` }}
    >
      {content}
    </div>
  );
}

export default CorouselSlide;
