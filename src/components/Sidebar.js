import React from "react";
import { NavLink } from "react-router-dom";
import { logOut } from "../redux/slice/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = ({ setShowMenu }) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);

  return (
    <ul className="pt-5">
      <li onClick={() => setShowMenu(false)}>
        <NavLink
          activeclassname="active"
          to="/"
          className="text-white p-2 text-[16px] flex items-center"
        >
          <i className="text-[20px] bx bx-home-alt mr-4"></i> Trang chủ
        </NavLink>
      </li>
      <li onClick={() => setShowMenu(false)}>
        <NavLink
          activeclassname="active"
          to="/trending"
          className="text-white p-2 text-[16px] flex items-center"
        >
          <i className="text-[20px] bx bxs-hot mr-4"></i> Thịnh hành
        </NavLink>
      </li>
      <li onClick={() => setShowMenu(false)}>
        <NavLink
          activeclassname="active"
          to="/subsrciptions"
          className="text-white p-2 text-[16px] flex items-center"
        >
          <i className="text-[20px] bx bxs-videos mr-4"></i> Đã đăng ký
        </NavLink>
      </li>
      <div className="w-full h-[1px] bg-[#ccc] my-4 opacity-10"></div>

      <li onClick={() => setShowMenu(false)}>
        <NavLink
          activeclassname="active"
          to="/favouites"
          className="text-white p-2 text-[16px] flex items-center"
        >
          <i className="text-[20px] bx bx-movie-play mr-4"></i>Video yêu thích
        </NavLink>
      </li>
      <li onClick={() => setShowMenu(false)}>
        <NavLink
          activeclassname="active"
          to="/history"
          className="text-white p-2 text-[16px] flex items-center"
        >
          <i className="text-[20px] bx bx-history mr-4"></i> Video đã xem
        </NavLink>
      </li>
      <li onClick={() => setShowMenu(false)}>
        <NavLink
          activeclassname="active"
          to="/my-video"
          className="text-white p-2 text-[16px] flex items-center"
        >
          <i className="text-[20px] bx bx-video mr-4"></i> Video của tôi
        </NavLink>
      </li>
      <li onClick={() => setShowMenu(false)}>
        <NavLink
          activeclassname="active"
          to="/liked-video"
          className="text-white p-2 text-[16px] flex items-center"
        >
          <i className="text-[20px] bx bx-like mr-4"></i> Video đã thích
        </NavLink>
      </li>
      {currentUser && (
        <>
          <div className="w-full h-[1px] bg-[#ccc] my-4 opacity-10"></div>
          <li
            onClick={() => {
              setShowMenu(false);
              dispatch(logOut());
            }}
          >
            <button className="text-white p-2 text-[16px] flex items-center">
              <i className="bx bx-log-in-circle text-[20px] mr-4"></i> LogOut
            </button>
          </li>
          <div className="w-full h-[1px] bg-[#ccc] my-4 opacity-10"></div>
        </>
      )}
    </ul>
  );
};

export default Sidebar;
