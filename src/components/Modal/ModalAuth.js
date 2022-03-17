import React from "react";
import { Link, useLocation } from "react-router-dom";
import Overlay from "./Overlay";

const ModalAuth = ({ setShow }) => {
  const location = useLocation();

  return (
    <Overlay setShow={setShow}>
      <Link
        onClick={(e) => e.stopPropagation()}
        to={`/sign-in?redirect=${encodeURIComponent(location.pathname)}`}
        className="py-2 px-10 text-center bg-red-500 rounded-md hover:bg-red-700 transition-all"
      >
        Đăng nhập ngay
      </Link>
    </Overlay>
  );
};

export default ModalAuth;
