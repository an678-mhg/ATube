import React from "react";
import { Link, useLocation } from "react-router-dom";

const ModalAuth = ({ setShow }) => {
  const location = useLocation();

  return (
    <div
      className="fixed top-0 bottom-0 right-0 left-0 background-overlay flex items-center justify-center"
      onClick={() => setShow(false)}
    >
      <Link
        onClick={(e) => e.stopPropagation()}
        to={`/sign-in?redirect=${encodeURIComponent(location.pathname)}`}
        className="py-2 px-10 text-center bg-red-500 rounded-md hover:bg-red-700 transition-all"
      >
        Đăng nhập ngay
      </Link>
    </div>
  );
};

export default ModalAuth;
