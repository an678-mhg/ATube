import React from "react";
import { Link } from "react-router-dom";

const ChannelCard = ({ data }) => {
  return (
    <Link to={`/channel/${data?._id}`} className="flex items-center">
      <div className="w-[136px] h-[136px] overflow-hidden rounded-full border-2 border-red-500">
        <img src={data?.avatar} />
      </div>
      <div className="ml-5">
        <p className="text-md font-semibold">{data?.name}</p>
        <div className="mt-4">
          <p className="text-sm text-[#999]">{data?.email}</p>
          <p className="text-sm text-[#999]">
            {data?.description.length > 40
              ? data?.description.slice(0, 40) + "..."
              : data?.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ChannelCard;
