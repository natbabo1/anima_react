function HighlightPlayButton() {
  return (
    <div className="position-relative " style={{ width: 'fit-content' }}>
      <div className="play-button-inner fs-2 text-secondary"></div>
      <div className="play-icon">
        <i className="fa-solid fa-play text-secondary"></i>
      </div>
      <div className="play-button" style={{ width: 150, height: 150 }}></div>
    </div>
  );
}

export default HighlightPlayButton;
