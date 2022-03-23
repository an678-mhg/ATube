import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavbarUser from "./NavbarUser";
import NavLogin from "./NavLogin";

const Header = ({ setShowMenu }) => {
  const { currentUser } = useSelector((state) => state.auth);
  const inputRef = useRef();
  const inputRefMobile = useRef();
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);

  const submitForm = (e, value) => {
    e.preventDefault();
    if (!value.trim()) return;
    navigate(`/search?type=video&q=${value}`);
    setShowSearch(false);
    inputRef.current.value = "";
  };

  return (
    <div className="flex justify-between items-center text-white py-2 relative">
      <div className="flex items-center justify-center">
        <i
          onClick={() => setShowMenu(true)}
          className="bx bx-menu-alt-left text-[25px] lg:hidden"
        ></i>
      </div>

      <form
        onSubmit={(e) => submitForm(e, inputRef.current.value)}
        className="items-center justify-center py-1 w-[500px] hidden md:flex"
      >
        <input
          ref={inputRef}
          className="text-white bg-[#222] flex-1 outline-none py-1 px-3 h-[30px]"
          type="text"
          placeholder="Tìm kiếm"
        />
        <button className="px-3 bg-red-500 w-[45px] h-[30px] flex items-center">
          <i className="text-xl bx bx-search"></i>
        </button>
      </form>

      <div className="flex items-center">
        <div
          className="flex items-center justify-center mr-4 md:hidden"
          onClick={() => setShowSearch(!showSearch)}
        >
          <i
            className={`${
              showSearch ? "text-xl bx bx-x" : "text-xl bx bx-search"
            } text-[25px]`}
          ></i>
          <form
            onClick={(e) => e.stopPropagation()}
            className={`absolute ${
              showSearch ? "top-[50px]" : "top-[-50px]"
            } rigth-0 left-0 w-full transition-all border overflow-hidden z-[100]`}
            onSubmit={(e) => submitForm(e, inputRefMobile.current.value)}
          >
            <input
              ref={inputRefMobile}
              placeholder="Tìm kiếm"
              className="text-white bg-[#222] flex-1 outline-none w-full px-3 py-2"
            />
          </form>
        </div>
        {currentUser ? <NavbarUser user={currentUser} /> : <NavLogin />}
      </div>
    </div>
  );
};

export default Header;
