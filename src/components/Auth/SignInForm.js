import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getUserInfoApi, loginUserApi } from "../../api/authApi";
import { addUser } from "../../redux/slice/authSlice";
import setAuthToken from "../../utils/setAuthToken";

const SignInForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await loginUserApi(data);
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        setAuthToken(res.data.token);
        const userInfo = await getUserInfoApi();
        dispatch(addUser(userInfo.data.user));
        toast.success(res.data.message);
      }
    } catch (err) {
      toast.error(err.response.data.message);
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={submitForm}
      className="w-[500px] bg-[#222] rounded-md p-4 max-w-[calc(100%-16px)]"
    >
      <h1 className="text-[20px] font-semibold">Đăng nhập</h1>
      <div className="w-full mt-4">
        <div className="w-full mb-4">
          <label className="block my-2 text-[16px]">Enter your email</label>
          <input
            placeholder="EX: an567008@gmail.com"
            className="bg-[#333] text-white py-1 px-3 w-full text-[16px] outline-none rounded-sm"
            value={data.email}
            name="email"
            onChange={onChangeInput}
          />
        </div>
        <div className="w-full mb-4">
          <label className="block my-2 text-[16px]">Enter your password</label>
          <input
            placeholder="EX: 12345678"
            className="bg-[#333] text-white py-1 px-3 w-full text-[16px] outline-none rounded-sm"
            value={data.password}
            name="password"
            onChange={onChangeInput}
          />
        </div>
        <div className="w-full">
          <button className="py-2 px-3 bg-[#111] text-white rounded-sm w-full">
            Đăng nhập
          </button>
        </div>

        <p className="mt-4 text-right text-[14px]">
          Nếu bạn chưa có tài khoản hãy{" "}
          <Link className="text-blue-500" to="/sign-up">
            Đăng ký
          </Link>
        </p>
      </div>

      {loading && <Loading />}
    </form>
  );
};

export default SignInForm;
