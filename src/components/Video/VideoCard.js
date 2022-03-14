import React from "react";
import { Link } from "react-router-dom";
import { calculateCreatedTime } from "../../utils/formatDate";

const VideoCard = ({ data }) => {
  return (
    <div>
      <Link
        to={`/details/${data._id}`}
        className="aspect-[16/9] rounded-sm block"
      >
        <img
          alt={data?.title}
          className="w-full h-full object-cover"
          src={
            data?.thumnailVideo
              ? data?.thumnailVideo
              : data?.videoUrl?.replace(".mp4", ".jpg")
          }
        />
        <div className="p-4 flex items-start justify-between">
          <div className="w-[35px] h-[35px] rounded-full overflow-hidden">
            <img
              alt={data?.writer?.name}
              className="w-full h-full object-cover"
              src={data?.writer?.avatar}
            />
          </div>
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
