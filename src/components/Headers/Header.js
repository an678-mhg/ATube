import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavbarUser from "./NavbarUser";
import NavLogin from "./NavLogin";

const Header = ({ setShowMenu }) => {
  const { currentUser } = useSelector((state) => state.auth);
  const inputRef = useRef();
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    if (!inputRef.current.value.trim()) return;
    navigate(`/search?q=${inputRef.current.value}`);
  };

  return (
    <div className="flex justify-between items-center text-white py-2">
      <div className="flex items-center justify-center">
        <i
          onClick={() => setShowMenu(true)}
          className="bx bx-menu-alt-left text-[25px] lg:hidden"
        ></i>
      </div>

      <form
        onSubmit={submitForm}
        className="items-center justify-center py-1 w-[500px] hidden md:flex"
      >
        <input
          ref={inputRef}
          className="text-white bg-[#222] flex-1 outline-none py-1 px-3 h-[30px]"
          type="text"
          placeholder="Tìm kiếm"
        />
        <button className="px-3 bg-[#ffffff1a] w-[45px] h-[30px] flex items-center">
          <i className="text-xl bx bx-search"></i>
        </button>
      </form>

      {currentUser ? <NavbarUser user={currentUser} /> : <NavLogin />}
    </div>
  );
};

export default Header;
