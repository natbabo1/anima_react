import { useEffect, useRef } from "react";
import TheaterSke from "./skeletons/TheaterSke";

function Theater({ src, vpass }) {
  const vid = useRef();

  useEffect(() => {
    if (vid?.current) {
      vid.current.play();
    }
  }, []);

  if (!vpass) {
    return <TheaterSke notSubscribed={true} />;
  }

  return (
    <div className="block mt-28 w-full h-[80vh] bg-black">
      <video
        className="mx-auto p-0 h-full"
        ref={vid}
        src={src + "?vpass=" + vpass}
        controls
        autoPlay
      ></video>
    </div>
  );
}

export default Theater;
