import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addVideoFavourite,
  getVideoFavourite,
} from "../../redux/slice/videoFavouriteSlice";
import {
  likeVideo,
  unLike,
  disLikeVideo,
  unDisLikeVideo,
} from "../../redux/slice/videoSlice";
import ModalAuth from "../ModalAuth";
import { toast } from "react-toastify";

const VideoInfo = ({ video, likeCount, disLikeCount }) => {
  const { isLike, isDisLike } = useSelector((state) => state.video);
  const { currentUser } = useSelector((state) => state.auth);
  const { videos } = useSelector((state) => state.favourite);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const { id } = useParams();

  const handleLike = () => {
    if (!currentUser) return setShowModal(true);
    if (isLike) {
      dispatch(unLike(id));
    } else {
      if (isDisLike) {
        dispatch(likeVideo({ videoId: id }));
        dispatch(unDisLikeVideo(id));
        return;
      }
      dispatch(likeVideo({ videoId: id }));
    }
  };

  const handleDisLike = () => {
    if (!currentUser) return setShowModal(true);
    if (isDisLike) {
      dispatch(unDisLikeVideo(id));
    } else {
      if (isLike) {
        dispatch(disLikeVideo({ videoId: id }));
        dispatch(unLike(id));
        return;
      }
      dispatch(disLikeVideo({ videoId: id }));
    }
  };

  useEffect(() => {
    if (!currentUser) return;
    dispatch(getVideoFavourite());
  }, [currentUser, dispatch]);

  const handleAddVideoFavourite = () => {
    const check = videos.some((p) => p._id === video?._id);
    if (check)
      return toast.error("Video đã tồn tại trong danh sách yêu thích!");
    dispatch(addVideoFavourite(video));
    toast.success("Thêm thành công rồi đó !");
  };

  return (
    <div className="p-3">
      <h1 className="text-[20px] font-semibold my-3">
        {video?.title?.length > 100
          ? video?.title?.slice(0, 100) + "..."
          : video?.title}
      </h1>
      <div className="flex items-start md:items-center md:justify-between justify-start flex-col md:flex-row">
        <div className="flex items-center">
          <p className="text-xs text-gray-200 mr-1">
            {video?.totalView} lượt xem
          </p>
          <p className="text-xs text-gray-200 ml-1">{video?.createdAt}</p>
        </div>
        <div className="flex items-center mt-4 md:mt-0">
          <button
            className="flex items-center justify-center p-2"
            onClick={handleLike}
          >
            <i
              className={`text-2xl ${isLike ? "bx bxs-like" : "bx bx-like"}`}
            ></i>
            <span className="ml-1 text-sm">{likeCount}</span>
          </button>
          <button
            onClick={handleDisLike}
            className={`flex items-center justify-center p-2`}
          >
            <i
              className={`text-2xl ${
                isDisLike ? `bx bxs-dislike` : `bx bx-dislike`
              }`}
            ></i>
            <span className="ml-1 text-sm">{disLikeCount}</span>
          </button>
          <button
            className="flex items-center justify-center p-2"
            onClick={handleAddVideoFavourite}
          >
            <i
              className={`${
                videos.some((p) => p._id === video?._id)
                  ? "bx bx-list-check"
                  : "bx bx-list-plus"
              } text-2xl`}
            ></i>
            <span className="ml-1 text-sm">Add playlist</span>
          </button>
        </div>
      </div>

      {showModal && <ModalAuth />}
    </div>
  );
};

export default VideoInfo;
