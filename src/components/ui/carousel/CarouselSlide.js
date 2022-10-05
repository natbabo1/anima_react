function CorouselSlide({ page, pageNo, content }) {
  return (
    <div className="h-full">
      <div
        className={`absolute left-3 px-12 duration-700 ease-in flex justify-left gap-6 items-start shrink-0 w-[100vw] h-full ${
          Math.abs(pageNo - page) <= 1 ? '' : 'hidden'
        }`}
        style={{ transform: `translateX(${100 * (pageNo - page)}%)` }}
      >
        {content}
      </div>
    </div>
  );
}

export default CorouselSlide;
