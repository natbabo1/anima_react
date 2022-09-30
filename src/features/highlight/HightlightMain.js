import highlighBg from '../../assets/images/highlightBg.jpeg';
import HighlightPlayButton from '../../components/ui/HighlightPlayButton';

function HightlightMain() {
  return (
    <div
      className="container-fluid px-0 highlight-bg d-flex"
      style={{
        backgroundImage: `linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 14%,
    rgba(0, 0, 0, 1) 100%
  ), url(${highlighBg})`
      }}
    >
      <div className="w-50 position-relative">
        <div
          className="position-absolute"
          style={{ bottom: '12%', left: '15%', cursor: 'pointer' }}
        >
          <HighlightPlayButton />
        </div>
      </div>
      <div className="w-50 ms-5 ps-5 pt-3">
        <div
          className="text-wrap w-50"
          style={{ fontSize: '4.5rem', lineHeight: '120%' }}
        >
          Fullmetal Alchemist: Brotherhood
        </div>
        <p className="fs-4 mt-4">
          After a horrific alchemy experiment goes wrong in the Elric household,
          brothers Edward and Alphonse are left in a catastrophic new reality.
          Ignoring the alchemical principle banning human transmutation,...
        </p>
        <p className="fs-5">
          <span className="fw-bold">Ratings:</span> 9.1 | 17+
        </p>
        <div className="fs-5 my-2 d-flex align-items-center gap-2">
          <span className="fw-bold">Genre:</span>
          <div className="bg-secondary px-2  py-1 rounded">Action</div>
          <div className="bg-secondary px-2  py-1 rounded">Adventure</div>
          <div className="bg-secondary px-2  py-1 rounded">Drama</div>
          <div className="bg-secondary px-2  py-1 rounded">Fantasy</div>
        </div>
        <p className="fs-5">
          <span className="fw-bold">Duration:</span> 24 mins per Ep | 64 Ep
        </p>
      </div>
    </div>
  );
}

export default HightlightMain;
