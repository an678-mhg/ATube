import React from "react";
import { Link } from "react-router-dom";

const NavLogin = () => {
  return (
    <div className="flex items-center">
      <Link to="/sign-in" className="py-1 px-3 bg-[#ffffff1a] rounded-md">
        Đăng nhập
      </Link>
    </div>
  );
};

export default NavLogin;
