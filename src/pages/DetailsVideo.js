import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  checkDisLikeVideo,
  checkLike,
  clearVideo,
  getVideoById,
} from "../redux/slice/videoSlice";
import Loading from "../components/Loading";
import VideoPlayer from "../components/Video/VideoPlayer";
import VideoInfo from "../components/Video/VideoInfo";
import VideoInfoWriter from "../components/Video/VideoInfoWriter";
import VideoCardRow from "../components/Video/VideoCardRow";
import Title from "../components/Title";
import PageNotFound from "./PageNotFound";
import NoResults from "../components/NoResults";

const DetailsVideo = () => {
  const { video, loading, videoRecomment, likeCount, disLikeCount, error } =
    useSelector((state) => state.video);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getVideoById(id));

    return () => {
      dispatch(clearVideo());
    };
  }, [id]);

  useEffect(() => {
    dispatch(checkLike(id));
  }, [id]);

  useEffect(() => {
    dispatch(checkDisLikeVideo(id));
  }, [id]);

  if (error) return <PageNotFound />;

  return (
    <div className="text-white flex md:flex-row flex-col mb-10">
      <Title
        title={`${video?.title || "ATube - Video sharing website"} | ATube`}
      />
      <div className="w-full md:w-[60%] bg-[#222]">
        <VideoPlayer src={video?.videoUrl} />
        <VideoInfo
          likeCount={likeCount}
          disLikeCount={disLikeCount}
          video={video}
        />
        <VideoInfoWriter video={video} />
      </div>
      <div className="flex-1 md:ml-4 pt-4 md:pt-0 overflow-auto bg-[#222]">
        {videoRecomment.length > 1 ? (
          videoRecomment
            ?.filter((p) => p._id !== id)
            .map((p) => (
              <VideoCardRow
                percentImg={"40%"}
                maxlengthTitle={30}
                key={p._id}
                data={p}
              />
            ))
        ) : (
          <NoResults />
        )}
      </div>

      {loading && <Loading />}
    </div>
  );
};

export default DetailsVideo;
