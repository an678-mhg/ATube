import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  checkDisLikeVideo,
  checkLike,
  clearVideo,
  getVideoById,
  setIsDisLike,
  setIsLike,
} from "../redux/slice/videoSlice";
import Loading from "../components/Loading/Loading";
// import VideoPlayer from "../components/Video/VideoPlayer";
import { Player } from "react-tuby";
import "react-tuby/css/main.css";
import VideoInfo from "../components/Video/VideoInfo";
import VideoInfoWriter from "../components/Video/VideoInfoWriter";
import VideoCardRow from "../components/Video/VideoCardRow";
import Title from "../components/Shared/Title";
import PageNotFound from "./PageNotFound";
import { addVideoLocal } from "../utils/localStrorage";

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
    if (!currentUser) return dispatch(setIsLike(false));
    dispatch(checkLike(id));
  }, [id, currentUser, dispatch]);

  useEffect(() => {
    if (!currentUser) return dispatch(setIsDisLike(false));
    dispatch(checkDisLikeVideo(id));
  }, [id, currentUser, dispatch]);

  useEffect(() => {
    if (video._id) {
      addVideoLocal({
        ...video,
        viewAt: Date.now(),
      });
    }
  }, [video]);

  if (error) return <PageNotFound />;

  return (
    <div className="text-white flex md:flex-row flex-col mb-10">
      <Title
        title={`${video?.title || "ATube - Video sharing website"} | ATube`}
      />
      <div className="w-full md:w-[60%]">
        {/* <VideoPlayer src={video?.videoUrl} /> */}
        {video?.videoUrl && (
          <Player
            poster={video?.videoUrl.replace(".mp4", ".jpg")}
            src={video?.videoUrl}
          />
        )}
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
