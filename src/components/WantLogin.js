import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const WantLogin = () => {
  const location = useLocation();

  return (
    <div className="w-full h-[calc(100vh-70px)] flex justify-center items-center">
      <div className="w-[400px] max-w-[calc(100%-32px)] bg-[#222] flex items-center justify-between flex-col p-4">
        <div className="w-[50px] h-[50px] border flex items-center justify-center">
          <i className="bx bx-user text-[30px] text-white"></i>
        </div>
        <p className="py-3 px-5 text-white">Cần đăng nhập để vào trang này!</p>
        <Link
          to={`/sign-in?redirect=${encodeURIComponent(location.pathname)}`}
          className="py-2 px-3 bg-red-600 text-white rounded-md"
        >
          Sign-In
        </Link>
      </div>
    </div>
  );
};

export default WantLogin;
