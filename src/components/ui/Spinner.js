function Spinner() {
  return (
    <div
      className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-40 w-full md:inset-0 h-modal md:h-full flex justify-center items-center bg-black/80"
      style={{ zIndex: 1056 }}
    >
      <div className="border-4 border-anima-green/80 w-14 h-14 rounded-full z-50 animate-spin border-l-transparent"></div>
    </div>
  );
}

export default Spinner;
