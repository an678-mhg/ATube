import React from "react";
import { Link } from "react-router-dom";
import ImgFade from "../Shared/ImgFade";

const VideoCardRow = ({ data }) => {
  return (
    <Link to={`/details/${data._id}`} className="flex justify-center mb-4">
      <div
        className={`aspect-[16/9] xl:w-[35%] lg:w-[45%] md:w-[50%] w-[50%] bg-[#333] rounded-md overflow-hidden`}
      >
        <ImgFade
          lazy_src={
            data?.videoThumnail
              ? data?.videoThumnail
              : data?.videoUrl?.replace(".mp4", ".jpg")
          }
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-2 h-full flex-1">
        <p className="text-[14px] font-semibold line-clamp-2">{data?.title}</p>
        <p className="text-xs font-medium mt-2 text-[#999] line-clamp-1">
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
