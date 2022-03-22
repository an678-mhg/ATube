import React, { useState } from "react";
import { toast } from "react-toastify";
import { deleteCommentApi } from "../../api/commentApi";
import { calculateCreatedTime } from "../../utils/formatDate";

const CommentItem = ({ data, deleteComment }) => {
  const [loading, setLoading] = useState(false);

  const handleDelteComment = async (id) => {
    if (window.confirm("Bạn có chắc muốn xóa nhận xét!")) {
      setLoading(true);
      const res = await deleteCommentApi(id);
      if (res.data.success) {
        deleteComment(id);
        toast.success("Xóa nhận sét thành công!");
      } else {
        toast.error("Xóa nhận xét thất bại!");
      }
      setLoading(false);
    }
  };

  return (
    <div className="flex mb-4">
      <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={data?.userId?.avatar}
        />
      </div>
      <div className="flex-1 ml-4 overflow-hidden flex items-center justify-between">
        <div>
          <div className="flex items-center text-xs text-[#999]">
            <p className="text-white">{data?.userId?.name}</p>
            <p className="ml-1">{calculateCreatedTime(data?.createdAt)}</p>
          </div>
          <p className="text-sm font-semibold mt-2">{data?.content}</p>
        </div>
        <button
          disabled={loading}
          onClick={() => handleDelteComment(data?._id)}
          className={`py-2 px-3 text-xs rounded-md bg-red-500 ${
            loading ? "cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          {loading ? "Đang xóa..." : "Xóa"}
        </button>
      </div>
    </div>
  );
};

export default CommentItem;
