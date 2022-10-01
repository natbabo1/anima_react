import AnimeCard from '../../components/ui/card/AnimeCard';
import CarouselFrame from '../../components/ui/carousel/CarouselFrame';

function PopularAnime({ title }) {
  const content = [
    <AnimeCard />,
    <AnimeCard />,
    <AnimeCard />,
    <AnimeCard />,
    <AnimeCard />,
    <AnimeCard />,
    <AnimeCard />,
    <AnimeCard />,
    <AnimeCard />,
    <AnimeCard />,
    <AnimeCard />,
    <AnimeCard />,
    <AnimeCard />
  ];
  return (
    <>
      <div className="w-full h-16 bg-dark-gray flex flex-col justify-end text-4xl text-snow-white px-12 -mt-6 -mb-6">
        {title}
      </div>
      <div className="bg-dark-gray h-[30rem]">
        <CarouselFrame content={content} perPage={6} />
      </div>
    </>
  );
}

export default PopularAnime;
