import { useState } from 'react';
import CarouselSlide from './CarouselSlide';

function CarouselFrame({ content, perPage }) {
  const [page, setPage] = useState(0);

  return (
    <div className="h-full bg-transparent w-full relative px-14 ">
      <div className="flex flex-nowrap items-start h-full">
        <CarouselSlide
          page={page}
          pageNo={0}
          content={content.slice(perPage * 0, perPage)}
        />
        <CarouselSlide
          page={page}
          pageNo={1}
          content={content.slice(perPage * 1, perPage * 2)}
        />
        <CarouselSlide
          page={page}
          pageNo={2}
          content={content.slice(perPage * 2, perPage * 3)}
        />
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
        onClick={() => setPage((prev) => (prev === 2 ? prev : prev + 1))}
      >
        <i className="fa-solid fa-chevron-right text-snow-white"></i>
      </button>
    </div>
  );
}

export default CarouselFrame;
