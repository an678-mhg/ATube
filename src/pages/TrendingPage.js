import React, { useEffect, useState } from "react";
import { getVideoTrendingApi } from "../api/videoApi";
import VideoCardRow from "../components/Video/VideoCardRow";

const TrendingPage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await getVideoTrendingApi();
      if (res.data.success) {
        setVideos(res.data.videos);
      }
    })();
  }, []);

  return (
    <div className="w-[50%] ml-[50px] text-white">
      {videos.map((p) => (
        <VideoCardRow key={p?._id} data={p} />
      ))}
    </div>
  );
};

export default TrendingPage;
