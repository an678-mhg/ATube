import React from "react";
import CommentItem from "./CommentItem";

const CommentList = ({ commentList, deleteComment }) => {
  return (
    <div className="mt-5 h-[200px] overflow-auto rounded-md">
      {commentList.length > 0 ? (
        commentList.map((p) => (
          <CommentItem key={p._id} data={p} deleteComment={deleteComment} />
        ))
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <h1>Không có nhận xét nào gần đây!</h1>
        </div>
      )}
    </div>
  );
};

export default CommentList;
