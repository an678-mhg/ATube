import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getUserInfoApi, registerUserApi } from "../../api/authApi";
import { addUser } from "../../redux/slice/authSlice";
import setAuthToken from "../../utils/setAuthToken";
import Loading from "../Loading/Loading";

const SignUpForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    comfirm_password: "",
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
      const res = await registerUserApi(data);
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        setAuthToken(res.data.token);
        const userInfo = await getUserInfoApi();
        dispatch(addUser(userInfo.data.user));
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={submitForm}
      className="w-[500px] bg-[#222] rounded-md p-4 max-w-[calc(100%-16px)]"
    >
      <h1 className="text-[20px] font-semibold">Đăng ký</h1>
      <div className="w-full mt-4">
        <div className="w-full mb-4">
          <label className="block my-2 text-[16px]">Enter your name</label>
          <input
            placeholder="EX: Nguyen Quoc An"
            className="bg-[#333] text-white py-1 px-3 w-full text-[16px] outline-none rounded-sm"
            value={data.name}
            name="name"
            onChange={onChangeInput}
          />
        </div>
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
        <div className="w-full mb-4">
          <label className="block my-2 text-[16px]">
            Enter your comfirm password
          </label>
          <input
            placeholder="EX: 12345678"
            className="bg-[#333] text-white py-1 px-3 w-full text-[16px] outline-none rounded-sm"
            value={data.comfirm_password}
            name="comfirm_password"
            onChange={onChangeInput}
          />
        </div>
        <div className="w-full">
          <button className="py-2 px-3 bg-red-500 text-white rounded-sm w-full">
            Đăng ký
          </button>
        </div>
        <p className="mt-4 text-right text-[14px]">
          Nếu bạn đã có tài khoản hãy{" "}
          <Link className="text-blue-500" to="/sign-in">
            Đăng nhập
          </Link>
        </p>
      </div>

      {loading && <Loading />}
    </form>
  );
};

export default SignUpForm;
