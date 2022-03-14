import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <ul className="pt-5">
      <li>
        <NavLink
          activeclassname="active"
          to="/"
          className="text-white p-2 text-[16px] flex items-center"
        >
          <i className="text-[20px] bx bx-home-alt mr-4"></i> Trang chủ
        </NavLink>
      </li>
      <li>
        <NavLink
          activeclassname="active"
          to="/trending"
          className="text-white p-2 text-[16px] flex items-center"
        >
          <i className="text-[20px] bx bxs-hot mr-4"></i> Thịnh hành
        </NavLink>
      </li>
      <li>
        <NavLink
          activeclassname="active"
          to="/subsrciptions"
          className="text-white p-2 text-[16px] flex items-center"
        >
          <i className="text-[20px] bx bxs-videos mr-4"></i> Đã đăng ký
        </NavLink>
      </li>
      <div className="w-full h-[1px] bg-[#ccc] my-4 opacity-10"></div>
      <li>
        <NavLink
          activeclassname="active"
          to="/favorites"
          className="text-white p-2 text-[16px] flex items-center"
        >
          <i className="text-[20px] bx bx-movie-play mr-4"></i>Video yêu thích
        </NavLink>
      </li>
      <li>
        <NavLink
          activeclassname="active"
          to="/history"
          className="text-white p-2 text-[16px] flex items-center"
        >
          <i className="text-[20px] bx bx-history mr-4"></i> Video đã xem
        </NavLink>
      </li>
      <li>
        <NavLink
          activeclassname="active"
          to="/channel"
          className="text-white p-2 text-[16px] flex items-center"
        >
          <i className="text-[20px] bx bx-video mr-4"></i> Video của tôi
        </NavLink>
      </li>
      <li>
        <NavLink
          activeclassname="active"
          to="/liked-video"
          className="text-white p-2 text-[16px] flex items-center"
        >
          <i className="text-[20px] bx bx-like mr-4"></i> Video đã thích
        </NavLink>
      </li>
      <div className="w-full h-[1px] bg-[#ccc] my-4 opacity-10"></div>
    </ul>
  );
};

export default Sidebar;
