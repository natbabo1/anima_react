import { useEffect, useRef } from 'react';

function Theater({ src }) {
  const vid = useRef();

  useEffect(() => {
    if (vid.current) {
      vid.current.play();
    }
  }, []);

  return (
    <div className="block mt-28 w-full h-[80vh] bg-black">
      <video
        className="mx-auto p-0 h-full"
        ref={vid}
        src={src}
        controls
        autoPlay
      ></video>
    </div>
  );
}

export default Theater;
