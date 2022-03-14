import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import { getUserInfoApi } from "./api/authApi";
import Loading from "./components/Loading";
import ClientPage from "./pages/ClientPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import { addUser, logOut } from "./redux/slice/authSlice";
import setAuthToken from "./utils/setAuthToken";

function App() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.search, location.pathname]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setAuthToken(localStorage.getItem("token"));
    }

    (async () => {
      try {
        const res = await getUserInfoApi();
        if (res.data.success) {
          dispatch(addUser(res.data.user));
        }
      } catch (error) {
        dispatch(logOut());
      }
    })();
  }, []);

  if (typeof currentUser === "undefined") return <Loading />;

  return (
    <Routes>
      <Route path="/*" element={<ClientPage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
    </Routes>
  );
}

export default App;