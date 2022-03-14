import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../redux/slice/authSlice";

const NavbarUser = ({ user }) => {
  const dispatch = useDispatch();

  const [showNav, setShowNav] = useState(false);

  return (
    <div className="flex items-center relative">
      <Link className="flex items-center" to="/upload">
        <i className="text-[25px] bx bx-upload mr-4"></i>
      </Link>
      <button className="flex items-center">
        <i className="text-[25px] bx bx-bell mr-4"></i>
      </button>
      <div
        className="w-[25px] h-[25px] rounded-full overflow-hidden nav-user cursor-pointer"
        onClick={() => setShowNav(!showNav)}
      >
        <img className="w-full h-full object-cover" src={user?.avatar} />

        {showNav && (
          <ul className="absolute right-0 bg-[#333] nav-user-list rounded-md overflow-hidden">
            <li className="py-2 px-3 border-b">{user.name}</li>
            <li className="py-2 px-3 border-b">{user.email}</li>
            <li className="py-2 px-3 border-b">Quản lí kênh</li>
            <li
              onClick={() => dispatch(logOut())}
              className="py-2 px-3 border-b cursor-pointer"
            >
              Đăng xuất
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavbarUser;
