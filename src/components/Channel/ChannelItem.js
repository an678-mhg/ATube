import React from "react";
import { Link } from "react-router-dom";
import ImageFade from "../Shared/ImgFade";

const ChannelItem = ({ data }) => {
  return (
    <Link
      to={`/channel/${data?.channelId?._id}`}
      className="flex items-center mb-4"
    >
      <div className="w-[30px] h-[30px] overflow-hidden rounded-full border border-red-500">
        <ImageFade lazy_src={data?.channelId?.avatar} />
      </div>
      <div className="ml-5">
        <p className="text-[15px] font-semibold">{data?.channelId?.name}</p>
      </div>
    </Link>
  );
};

export default ChannelItem;