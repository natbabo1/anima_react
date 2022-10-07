import CarouselFrame from '../../components/ui/carousel/CarouselFrame';
import EpisodeCard from '../../components/ui/card/EpisodeCard';
import EpisodeCardSke from '../../components/ui/skeletons/EpisodeCardSke';

function HighlightEpisode({ content }) {
  const highlightEpisode = [
    <EpisodeCardSke key={'skeHightlight01'} />,
    <EpisodeCardSke key={'skeHightlight02'} />,
    <EpisodeCardSke key={'skeHightlight03'} />,
    <EpisodeCardSke key={'skeHightlight04'} />
  ];

  return (
    <div className="w-full">
      <div className="w-full h-16 relative -top-16 bg-gradient-to-t from-dark-gray via-dark-gray/60 flex flex-col justify-end text-4xl text-snow-white px-12 -mb-10">
        Episodes
      </div>
      <div className="h-64">
        <CarouselFrame
          content={
            content.length === 0
              ? highlightEpisode
              : content.map((item, idx) => (
                  <EpisodeCard key={idx} episode={item} />
                ))
          }
          perPage={4}
        />
      </div>
    </div>
  );
}

export default HighlightEpisode;
