import { useRef, useEffect } from 'react';
import { Carousel as BsCarousel } from 'bootstrap';
import EpisodCard from '../../components/ui/EpisodCard';

function HighlightEpisode() {
  const carouselEl = useRef();

  useEffect(() => {
    const carouselObj = new BsCarousel(carouselEl, { keyboard: false });
  }, []);

  return (
    <div className="container-fluid bg-dark-gradient position-relative -top-40px">
      <h1>Episodes</h1>
      <div className="carousel slide" ref={carouselEl}>
        <div className="carousel-inner">
          <div className="carousel-item active d-flex justify-content-around active d-flex justify-content-around">
            <EpisodCard />
            <EpisodCard />
            <EpisodCard />
            <EpisodCard />
          </div>
          <div className="carousel-item d-flex justify-content-around">
            <EpisodCard />
            <EpisodCard />
            <EpisodCard />
            <EpisodCard />
          </div>
          <div className="carousel-item d-flex justify-content-around">
            <EpisodCard />
            <EpisodCard />
            <EpisodCard />
            <EpisodCard />
          </div>
        </div>
        <button
          className="carousel-control-prev justify-content-start"
          type="button"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next justify-content-end"
          type="button"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default HighlightEpisode;
