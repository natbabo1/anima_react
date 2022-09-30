function HighlightPlayButton() {
  return (
    <div className="relative w-fit bg-dark-gray/40 rounded-full shadow-2xl hover:scale-110 duration-500">
      <div className="play-button-inner fs-2"></div>
      <div className="play-icon">
        <i className="fa-solid fa-play text-dark-gray"></i>
      </div>
      <div className="play-button w-40 h-40"></div>
    </div>
  );
}

export default HighlightPlayButton;
