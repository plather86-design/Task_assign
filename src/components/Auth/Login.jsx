import React from "react";
import { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const LoginHandle = (e) => {
    e.preventDefault();
    handleLogin(email,password)
  };

  return (
    <div className="flex fixed bg-black items-center justify-center h-screen w-screen ">
      <div className="border-2 border-emerald-600 rounded-xl p-20">
        <h1 className="text-3xl text-center pb-3">Log In</h1>
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={(e) => {
            LoginHandle(e);
          }}
        >
          <input
            className="border-2 outline-none border-emerald-600 rounded-full py-3  px-5"
            type="text"
            placeholder="Enter Your Email"
            name=""
            id=""
            value={email}
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
          />
          <input
            className="border-2 border-emerald-600 rounded-full outline-none py-3  px-5 mt-4"
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => {
              setPassword(e.currentTarget.value);
            }}
          />
          <button className="border-2 border-emerald-600 rounded-full outline-none py-3  px-5 mt-4 hover:bg-amber-50 hover:text-emerald-400 cursor-pointer transition-all ">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
