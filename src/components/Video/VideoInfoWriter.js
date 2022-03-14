import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  checkSubsrciption,
  getSubsrciption,
  subsrciptionChannel,
  unSubsrciption,
} from "../../redux/slice/subsrciptionSlice";

const VideoInfoWriter = ({ video }) => {
  const dispatch = useDispatch();

  const { subsrciptCount, isSubsrciption } = useSelector((state) => state.sub);
  const { currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!video?.writer?._id) return;
    dispatch(getSubsrciption(video?.writer?._id));
  }, [video?.writer?._id]);

  useEffect(() => {
    if (!currentUser || !video?.writer?._id) return;
    dispatch(checkSubsrciption(video?.writer?._id));
  }, [currentUser, video?.writer?._id]);

  const handleSubsrciption = () => {
    if (!currentUser) return toast.error("Bạn cần đăng nhập để đăng ký kênh!");
    if (isSubsrciption) {
      dispatch(unSubsrciption(video?.writer?._id));
    } else {
      dispatch(subsrciptionChannel({ channelId: video?.writer?._id }));
    }
  };

  return (
    <div className="border-t border-b pb-4">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={video?.writer?.avatar}
              />
            </div>
            <div className="ml-4">
              <p className="font-semibold text-sm mb-2">
                {video?.writer?.name}
              </p>
              <p className="text-gray-300 text-xs">
                {subsrciptCount} người đăng ký
              </p>
            </div>
          </div>
          <button
            className={`py-2 px-3 ${
              isSubsrciption ? "bg-[#ffffff1a]" : "bg-red-500"
            } rounded-sm`}
            onClick={handleSubsrciption}
          >
            {isSubsrciption ? "Đã đăng ký" : "Đăng ký"}
          </button>
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