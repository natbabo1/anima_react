import { useState } from 'react';
import CarouselSlide from './CarouselSlide';

function CarouselFrame({ content, perPage }) {
  const [page, setPage] = useState(0);

  const maxPage = Math.ceil(content.length / perPage);
  const divideContent = () => {
    const result = [];

    for (let i = 0; i < maxPage; i++) {
      result.push(
        <CarouselSlide
          key={i}
          page={page}
          pageNo={i}
          content={content.slice(perPage * i, perPage * (i + 1))}
        />
      );
    }

    return result;
  };

  return (
    <div className="h-full bg-transparent w-full relative px-14 ">
      <div className="w-full overflow-x-hidden">
        <div className="flex flex-nowrap items-start">{divideContent()}</div>
      </div>
      <button
        className="absolute top-0 left-0 z-30 px-4 flex justify-start items-center h-full cursor-pointer w-[5%] bg-gradient-to-r from-dark-gray"
        type="button"
        onClick={() => setPage((prev) => (prev === 0 ? prev : prev - 1))}
      >
        <i className="fa-solid fa-chevron-left text-snow-white "></i>
      </button>
      <button
        className="absolute top-0 right-0 z-30 px-4 flex justify-end items-center h-full cursor-pointer w-[5%] bg-gradient-to-l from-dark-gray"
        type="button"
        onClick={() =>
          setPage((prev) => (prev < maxPage - 1 ? prev + 1 : prev))
        }
      >
        <i className="fa-solid fa-chevron-right text-snow-white"></i>
      </button>
    </div>
  );
}

export default CarouselFrame;
