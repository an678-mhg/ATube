import React from "react";

const ChannelBackGround = ({ background }) => {
  return (
    <div className="aspect-[16/5] w-full">
      <img className="w-full h-full object-cover" src={background} />
    </div>
  );
};

export default ChannelBackGround;
