import React, { useState } from "react";
import { toast } from "react-toastify";
import { deleteCommentApi } from "../../api/commentApi";
import { calculateCreatedTime } from "../../utils/formatDate";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CommentItem = ({ data, deleteComment }) => {
  const [loading, setLoading] = useState(false);

  const { currentUser } = useSelector((state) => state.auth);

  const handleDelteComment = async (id) => {
    if (window.confirm("Bạn có chắc muốn xóa nhận xét!")) {
      setLoading(true);
      const res = await deleteCommentApi(id);
      if (res.data.success) {
        deleteComment(id);
        toast.success("Xóa nhận xét thành công!");
      } else {
        toast.error("Xóa nhận xét thất bại!");
      }
      setLoading(false);
    }
  };

  return (
    <div className="flex mb-4 p-2 rounded-md">
      <Link
        className="w-[40px] h-[40px] rounded-full overflow-hidden"
        to={`/channel/${data?.userId?._id}`}
      >
        <img
          alt="img"
          className="w-full h-full object-cover"
          src={data?.userId?.avatar}
        />
      </Link>
      <div className="flex-1 ml-4 overflow-hidden flex items-center justify-between">
        <div className="flex-1 overflow-hidden">
          <div className="flex items-center text-xs text-[#999]">
            <p className="text-white">{data?.userId?.name}</p>
            <p className="ml-1">{calculateCreatedTime(data?.createdAt)}</p>
          </div>
          <p className="text-sm font-thin mt-2">{data?.content}</p>
        </div>
        {currentUser?._id === data?.userId?._id && (
          <button
            disabled={loading}
            onClick={() => handleDelteComment(data?._id)}
            className={`py-1 px-2 text-xs rounded-md ${
              loading ? "cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            X
          </button>
        )}
      </div>
    </div>
  );
};

export default CommentItem;
