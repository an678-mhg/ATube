import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavbarUser from "./NavbarUser";
import NavLogin from "./NavLogin";
import { useSearchParams } from "../../hooks/useSearchParms";

const Header = ({ setShowMenu }) => {
  const { currentUser } = useSelector((state) => state.auth);
  const timeoutRef = useRef();
  const navigate = useNavigate();
  const searchParams = useSearchParams();
  const [text, setText] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const onChangeForm = (e) => {
    const value = e.target.value;
    setText(value);

    if (!value.trim()) return;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      navigate(
        `/search?type=${searchParams.get("type") || "video"}&q=${value}`
      );
    }, 300);
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
        onSubmit={(e) => {
          e.preventDefault();
          setShowSearch(false);
          setText("");
        }}
        className={`items-center justify-center py-1 w-[500px] ${
          showSearch ? "top-[50px]" : "top-[-100px]"
        } fixed max-w-full left-0 flex md:static transition-all z-[9999]`}
      >
        <input
          value={text}
          className="text-white bg-[#222] flex-1 outline-none py-1 px-3 h-[30px] md:border-none border border-gray-600"
          type="text"
          placeholder="Tìm kiếm"
          onChange={(e) => onChangeForm(e)}
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
            className={`text-xl ${
              showSearch ? "bx bx-x" : "bx bx-search"
            } text-[25px]`}
          ></i>
        </div>
        {currentUser ? <NavbarUser user={currentUser} /> : <NavLogin />}
      </div>
    </div>
  );
};

export default Header;
