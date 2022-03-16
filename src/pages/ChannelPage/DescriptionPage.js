import React from "react";

const DescriptionPage = ({ descriptions, contact }) => {
  return (
    <div className="text-white p-4">
      <p className="font-semibold">Mô tả:</p>
      <p>{descriptions}</p>
      <p className="font-semibold mt-5">Liên hệ: </p>
      <p>{contact ? contact : "Không có"}</p>
    </div>
  );
};

export default DescriptionPage;
