import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavbarUser = ({ user }) => {
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
          <ul className="absolute right-0 bg-[#333] nav-user-list rounded-md overflow-hidden z-[1000]">
            <li className="py-2 px-3 border-b">{user.name}</li>
            <li className="py-2 px-3 border-b">{user.email}</li>
            <li className="py-2 px-3 border-b">
              <Link to={`/channel/${user._id}`}>Quản lí kênh</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavbarUser;
