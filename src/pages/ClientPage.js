import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Header from "../components/Headers/Header";
import UploadPage from "./UploadPage";
import DetailsVideo from "./DetailsVideo";
import SubsrciptionPage from "./SubsrciptionPage";
import TrendingPage from "./TrendingPage";
import Logo from "../components/Headers/Logo";
import SearchResults from "./SearchResults";
import FavouritePage from "./FavouritePage";
import PageNotFound from "./PageNotFound";
import PrivateRoute from "../components/PrivateRoute";

const ClientPage = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="px-4 flex">
      <div
        className={`w-[216px] pt-[5px] max-w-full mr-5 lg:block fixed lg:static top-0 bottom-0 bg-[#181818] lg:bg-transparent px-4 lg:px-0 z-[1000] ${
          showMenu ? "left-0" : "left-[-100%]"
        } transition-all`}
      >
        <Logo setShowMenu={setShowMenu} />
        <Sidebar setShowMenu={setShowMenu} />
      </div>
      <div className="flex-1">
        <Header setShowMenu={setShowMenu} />
        <div className="pt-3">
          <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="upload" element={<UploadPage />} />
            <Route path="details/:id" element={<DetailsVideo />} />
            <Route path="subsrciptions" element={<SubsrciptionPage />} />
            <Route path="trending" element={<TrendingPage />} />
            <Route path="search" element={<SearchResults />} />
            <Route path="favouites" element={<FavouritePage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default ClientPage;