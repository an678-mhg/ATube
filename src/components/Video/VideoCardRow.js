import React from "react";
import { Link } from "react-router-dom";
import ImgFade from "../Shared/ImgFade";

const VideoCardRow = ({ data, maxlengthTitle }) => {
  return (
    <Link
      to={`/details/${data._id}`}
      className="flex items-center justify-center mb-4"
    >
      <div className={`aspect-[16/9] w-[40%]`}>
        <ImgFade
          lazy_src={
            data?.thumnailVideo
              ? data?.thumnailVideo
              : data?.videoUrl?.replace(".mp4", ".jpg")
          }
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="px-2 h-full flex-1">
        <p className="text-[12px] font-semibold">
          {data?.title?.length > maxlengthTitle
            ? data?.title?.slice(0, maxlengthTitle) + "..."
            : data?.title}
        </p>
        <p className="text-xs font-medium mt-2 text-[#999]">
          {data?.writer?.name}
        </p>
        <p className="text-xs font-medium text-[#999]">
          {data?.totalView} lượt xem
        </p>
      </div>
    </Link>
  );
};

export default VideoCardRow;
