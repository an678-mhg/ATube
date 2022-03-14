import React from "react";
import Sidebar from "../components/Sidebar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Header from "../components/Headers/Header";
import UploadPage from "./UploadPage";
import DetailsVideo from "./DetailsVideo";
import SubsrciptionPage from "./SubsrciptionPage";
import TrendingPage from "./TrendingPage";
import Logo from "../components/Headers/Logo";

const ClientPage = () => {
  return (
    <div className="px-4 flex">
      <div className="w-[200px] mr-5">
        <Logo />
        <Sidebar />
      </div>
      <div className="flex-1">
        <Header />
        <div className="pt-3">
          <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="upload" element={<UploadPage />} />
            <Route path="details/:id" element={<DetailsVideo />} />
            <Route path="subsrciptions" element={<SubsrciptionPage />} />
            <Route path="trending" element={<TrendingPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default ClientPage;
