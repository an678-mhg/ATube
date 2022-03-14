import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { descViewApi } from "../../api/videoApi";

const VideoPlayer = ({ src }) => {
  const { loading } = useSelector((state) => state.video);
  const videoRef = useRef();
  const { id } = useParams();

  useEffect(() => {
    if (loading) {
      videoRef.current.pause();
    }
  }, [loading]);

  useEffect(() => {
    const handleDescView = () => {
      const { duration, currentTime } = videoRef.current;
      const percent = (currentTime * 100) / duration;
      if (percent > 80) {
        console.log(true);
        videoRef.current.removeEventListener("timeupdate", handleDescView);
        descViewApi(id);
      }
    };

    videoRef.current.addEventListener("timeupdate", handleDescView);

    return () => {
      videoRef.current.removeEventListener("timeupdate", handleDescView);
    };
  }, []);

  return (
    <div className="w-full aspect-[16/9] relative video-player">
      <video
        autoPlay
        ref={videoRef}
        controls
        className="w-full h-full"
        src={src}
      />
    </div>
  );
};

export default VideoPlayer;
