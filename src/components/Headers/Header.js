import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavbarUser from "./NavbarUser";
import NavLogin from "./NavLogin";

const Header = () => {
  const { currentUser } = useSelector((state) => state.auth);

  return (
    <div className="flex justify-between items-center text-white py-2">
      <div></div>
      <div className="items-center justify-center py-1 w-[500px] hidden md:flex">
        <input
          className="text-white bg-[#222] flex-1 outline-none py-1 px-3 h-[30px]"
          type="text"
          placeholder="Tìm kiếm"
        />
        <button className="px-3 bg-[#ffffff1a] w-[45px] h-[30px] flex items-center">
          <i className="text-xl bx bx-search"></i>
        </button>
      </div>

      {currentUser ? <NavbarUser user={currentUser} /> : <NavLogin />}
    </div>
  );
};

export default Header;
