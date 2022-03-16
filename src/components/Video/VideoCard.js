import React from "react";
import { Link } from "react-router-dom";
import { calculateCreatedTime } from "../../utils/formatDate";
import ImageFade from "../Shared/ImgFade";

const VideoCard = ({ data }) => {
  return (
    <div>
      <Link
        to={`/details/${data._id}`}
        className="aspect-[16/9] rounded-sm block"
      >
        <ImageFade
          alt={data?.title}
          className="w-full h-full object-cover"
          lazy_src={
            data?.thumnailVideo
              ? data?.thumnailVideo
              : data?.videoUrl?.replace(".mp4", ".jpg")
          }
        />
        <div className="p-4 flex items-start justify-between">
          <Link
            to={`/channel/${data?.writer?._id}`}
            className="w-[35px] h-[35px] rounded-full overflow-hidden block"
          >
            <img
              alt={data?.writer?.name}
              className="w-full h-full object-cover"
              src={data?.writer?.avatar}
            />
          </Link>
          <div className="ml-5 flex-1 flex flex-col items-start justify-start">
            <p className="text-[12px] hover:underline font-semibold">
              {data?.title?.length > 30
                ? data?.title?.trim().slice(0, 30) + "..."
                : data?.title?.trim()}
            </p>
            <div>
              <p className="text-xs text-gray-300 mt-2">{data?.writer?.name}</p>
              <div className="flex items-center mt-1">
                <p className="text-xs text-gray-100 flex items-center">
                  {data?.totalView} lượt xem{" "}
                  <i className="bx bx-radio-circle mx-1"></i>
                  {calculateCreatedTime(data.createdAt)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;
