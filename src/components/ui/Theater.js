import { useEffect, useRef } from "react";

function Theater({ src }) {
  const vid = useRef();

  // useEffect(() => {
  //   if (vid.current) {
  //     vid.current.play();
  //   }
  // }, []);

  return (
    <div className="block mt-28 w-full h-[80vh] bg-black">
      {/* <video
        className="mx-auto p-0 h-full"
        ref={vid}
        src={src}
        controls
        autoPlay
      ></video> */}
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/vF93EfemJ4E"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Theater;
