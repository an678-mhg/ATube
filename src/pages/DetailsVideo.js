import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  checkDisLikeVideo,
  checkLike,
  clearVideo,
  getVideoById,
} from "../redux/slice/videoSlice";
import Loading from "../components/Loading/Loading";
import VideoPlayer from "../components/Video/VideoPlayer";
import VideoInfo from "../components/Video/VideoInfo";
import VideoInfoWriter from "../components/Video/VideoInfoWriter";
import VideoCardRow from "../components/Video/VideoCardRow";
import Title from "../components/Shared/Title";
import PageNotFound from "./PageNotFound";

const DetailsVideo = () => {
  const { video, loading, videoRecomment, likeCount, disLikeCount, error } =
    useSelector((state) => state.video);
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getVideoById(id));

    return () => {
      dispatch(clearVideo());
    };
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(checkLike(id));
  }, [id, currentUser, dispatch]);

  useEffect(() => {
    dispatch(checkDisLikeVideo(id));
  }, [id, currentUser, dispatch]);

  if (error) return <PageNotFound />;

  return (
    <div className="text-white flex md:flex-row flex-col mb-10">
      <Title
        title={`${video?.title || "ATube - Video sharing website"} | ATube`}
      />
      <div className="w-full md:w-[60%]">
        <VideoPlayer src={video?.videoUrl} />
        <VideoInfo
          likeCount={likeCount}
          disLikeCount={disLikeCount}
          video={video}
        />
        <VideoInfoWriter video={video} />
      </div>
      <div className="flex-1 md:ml-5 pt-5 md:pt-0 overflow-auto">
        {videoRecomment.length > 1 ? (
          videoRecomment
            ?.filter((p) => p._id !== id)
            .map((p) => (
              <VideoCardRow
                percentImg={"40%"}
                maxlengthTitle={25}
                key={p._id}
                data={p}
              />
            ))
        ) : (
          <div className="h-screen flex items-center justify-center bg-[#222]">
            No Results!
          </div>
        )}
      </div>

      {loading && <Loading />}
    </div>
  );
};

export default DetailsVideo;
