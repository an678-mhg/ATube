import React from "react";
import ImageFade from "../Shared/ImgFade";

const ChannelItem = ({ data }) => {
  return (
    <div className="flex items-center mb-4">
      <div className="w-[30px] h-[30px] overflow-hidden rounded-full border border-red-500">
        <ImageFade lazy_src={data?.channelId?.avatar} />
      </div>
      <div className="ml-5">
        <p className="text-[15px] font-semibold">{data?.channelId?.name}</p>
      </div>
    </div>
  );
};

export default ChannelItem;
