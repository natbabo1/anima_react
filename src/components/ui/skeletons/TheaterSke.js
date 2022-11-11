function TheaterSke({ notSubscribed }) {
  return (
    <div className="block mt-28 w-full h-[80vh] bg-zinc-800 animate-pulse">
      <div className="mx-auto w-full pt-[56.25%] relative">
        {notSubscribed ? (
          <h1 className="absolute top-1/4 left-1/2 text-anima-green text-6xl -translate-x-1/2">
            Please Subsribe First
          </h1>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default TheaterSke;
