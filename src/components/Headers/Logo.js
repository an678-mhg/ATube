import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="py-2 text-white">
      <div className="flex items-center justify-center lg:hidden">
        <i className="bx bx-menu-alt-left text-[25px]"></i>
      </div>
      <div>
        <Link className="flex items-center text-[20px] font-semibold" to="/">
          <i className="text-2xl text-red-500 mr-3 bx bx-code-alt"></i>
          ATube
        </Link>
      </div>
    </div>
  );
};

export default Logo;
