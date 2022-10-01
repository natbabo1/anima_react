import EpisodCard from '../../components/ui/card/EpisodCard';
import CarouselFrame from '../../components/ui/carousel/CarouselFrame';

function HighlightEpisode() {
  const content = [
    <EpisodCard />,
    <EpisodCard />,
    <EpisodCard />,
    <EpisodCard />,
    <EpisodCard />,
    <EpisodCard />,
    <EpisodCard />,
    <EpisodCard />,
    <EpisodCard />,
    <EpisodCard />,
    <EpisodCard />,
    <EpisodCard />,
    <EpisodCard />
  ];
  return (
    <div className="h-56">
      <div className="w-full">
        <div className="w-full h-16 relative -top-16 bg-gradient-to-t from-dark-gray via-dark-gray/60 flex flex-col justify-end text-4xl text-snow-white px-12">
          Episodes
        </div>
        <div className="h-60 relative -top-20">
          <CarouselFrame content={content} perPage={4} />
        </div>
      </div>
    </div>
  );
}

export default HighlightEpisode;
