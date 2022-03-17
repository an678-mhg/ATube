import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  checkSubsrciption,
  setSubsrciptions,
  subsrciptionChannel,
  unSubsrciption,
} from "../../redux/slice/subsrciptionSlice";
import { toast } from "react-toastify";

const ChannelInfoTop = ({ profile, sub }) => {
  const { currentUser } = useSelector((state) => state.auth);
  const { isSubsrciption } = useSelector((state) => state.sub);
  const dispatch = useDispatch();

  const { id } = useParams();

  const handleSubsrciption = () => {
    if (!currentUser) return toast.error("Bạn cần đăng nhập để đăng ký kênh!");
    if (isSubsrciption) {
      dispatch(unSubsrciption(profile?._id));
    } else {
      dispatch(subsrciptionChannel({ channelId: profile?._id }));
    }
  };

  useEffect(() => {
    if (!currentUser) return dispatch(setSubsrciptions(false));
    if (!profile?._id) return;
    dispatch(checkSubsrciption(profile?._id));
  }, [id, currentUser, profile?._id]);

  return (
    <div className="bg-[#222]">
      <div className="p-4">
        <div className="flex items-center justify-between md:flex-row flex-col">
          <div className="flex items-center md:flex-row flex-col">
            <div className="w-[80px] h-[80px] rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={profile?.avatar}
              />
            </div>
            <div className="md:ml-4 ml-0 md:mt-0 mt-3 text-center lg:text-left">
              <p>{profile?.name}</p>
              <p className="text-[#999] text-sm">{sub} người đăng ký</p>
            </div>
          </div>
          {currentUser?._id !== profile?._id ? (
            <button
              onClick={handleSubsrciption}
              className={`mt-3 md:mt-0 py-2 px-3 ${
                isSubsrciption ? "bg-[#ffffff1a]" : "bg-red-500"
              } rounded-sm`}
            >
              {isSubsrciption ? "Đã đăng ký" : "Đăng ký"}
            </button>
          ) : (
            <div>
              <button className="mt-3 md:mt-0 py-2 px-3 rounded-sm bg-blue-500 mr-4">
                Tùy chỉnh kênh
              </button>
              <button className="mt-3 md:mt-0 py-2 px-3 rounded-sm bg-blue-500">
                Quản lí video
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChannelInfoTop;
