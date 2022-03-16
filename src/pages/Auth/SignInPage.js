import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import SignInForm from "../../components/Auth/SignInForm";
import Title from "../../components/Shared/Title";
import { useSearchParams } from "../../hooks/useSearchParms";

const SignInPage = () => {
  const { currentUser, message } = useSelector((state) => state.auth);
  const searchParams = useSearchParams();

  useEffect(() => {
    console.log(message);
  }, [message]);

  if (currentUser) return <Navigate to={searchParams.get("redirect") || "/"} />;

  return (
    <div className="text-white py-4 w-full h-screen flex items-center justify-center">
      <Title title={"Sign-In | ATube - Video sharing website"} />
      <SignInForm />
    </div>
  );
};

export default SignInPage;
