import { useEffect, useRef } from 'react';
import videoPV from '../../assets/videos/videoEpisodePV.mp4';

function Theater({ src }) {
  const vid = useRef();

  useEffect(() => {
    vid.current.play();
  }, []);

  return (
    <div className="block mt-28 w-full h-[80vh] bg-black">
      <video
        className="mx-auto p-0 h-full"
        ref={vid}
        src={src || videoPV}
        controls
        autoPlay
      ></video>
    </div>
  );
}

export default Theater;
