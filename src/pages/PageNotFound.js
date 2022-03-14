import React from "react";
import { Link } from "react-router-dom";
import Title from "../components/Title";

const PageNotFound = () => {
  return (
    <div className="h-[calc(100vh-70px)] bg-[#222] flex items-center justify-center">
      <Title title={"404 Page"} />
      <div className="error">
        <div className="error-body container">
          <h1 className="error-title">Oops!</h1>
          <p className="error-description">404-Page Not Found</p>
          <Link to="/">Go to HomePage</Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
