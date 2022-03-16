import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import PageNotFound from "../../pages/PageNotFound";
import {
  checkSubsrciption,
  getSubsrciption,
  setSubsrciptions,
  subsrciptionChannel,
  unSubsrciption,
} from "../../redux/slice/subsrciptionSlice";

const VideoInfoWriter = ({ video }) => {
  const dispatch = useDispatch();

  const { subsrciptCount, isSubsrciption, error } = useSelector(
    (state) => state.sub
  );
  const { currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!video?.writer?._id) return;
    dispatch(getSubsrciption(video?.writer?._id));
  }, [video?.writer?._id, dispatch]);

  useEffect(() => {
    if (!currentUser || !video?.writer?._id)
      return dispatch(setSubsrciptions(false));
    dispatch(checkSubsrciption(video?.writer?._id));
  }, [currentUser, video?.writer?._id, dispatch]);

  const handleSubsrciption = () => {
    if (!currentUser) return toast.error("Bạn cần đăng nhập để đăng ký kênh!");
    if (isSubsrciption) {
      dispatch(unSubsrciption(video?.writer?._id));
    } else {
      dispatch(subsrciptionChannel({ channelId: video?.writer?._id }));
    }
  };

  if (error) return <PageNotFound />;

  return (
    <div className="border-t border-b pb-4">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              to={`/channel/${video?.writer?._id}`}
              className="w-[50px] h-[50px] rounded-full overflow-hidden block"
            >
              <img
                className="w-full h-full object-cover"
                src={video?.writer?.avatar}
                alt="img"
              />
            </Link>
            <div className="ml-4">
              <Link
                to={`/channel/${video?.writer?._id}`}
                className="font-semibold text-sm mb-2 block"
              >
                {video?.writer?.name}
              </Link>
              <p className="text-gray-300 text-xs">
                {subsrciptCount} người đăng ký
              </p>
            </div>
          </div>
          {currentUser?._id !== video?.writer?._id && (
            <>
              <button
                className={`py-2 px-3 ${
                  isSubsrciption ? "bg-[#ffffff1a]" : "bg-red-500"
                } rounded-sm`}
                onClick={handleSubsrciption}
              >
                {isSubsrciption ? "Đã đăng ký" : "Đăng ký"}
              </button>
            </>
          )}
        </div>
      </div>

      <div className="mt-2 px-4">
        <p>Mô tả:</p>
        <p className="text-sm">{video?.description}</p>
      </div>
    </div>
  );
};

export default VideoInfoWriter;
