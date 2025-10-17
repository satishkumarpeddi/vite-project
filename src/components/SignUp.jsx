import React from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navgiate = useNavigate();

  const handleClick = () => {
    navgiate("/signin");
  };
  return (
    <div className="flex flex-col gap-y-1.5  md:w-screen items-center">
      <div className=" w-full lg:w-1/3 h-[500px] p-2 flex flex-col justify-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          action="submit"
          className="flex flex-col gap-10 justify-center p-2    "
        >
          <h1 className="font-bold text-3xl text-center">Sign Up Form</h1>
          <input
            type="eamil"
            className="p-3 border-2 border-white placeholder:text-white font-bold outline-none "
            placeholder="Enter your eamil."
          />
          <input
            type="password"
            className="p-3 border-2 border-white placeholder:text-white font-bold outline-none "
            placeholder="Enter your password."
          />
          <input
            type="text"
            className="p-3 border-2 border-white placeholder:text-white font-bold outline-none "
            placeholder="Enter the password again."
          />
          <p className="font-bold text-center cursor-pointer">
            If you have a account ?{" "}
            <p onClick={handleClick} className="text-white ">
              sign in
            </p>
          </p>
          <button
            type="submit"
            className="bg-white border-1 transition-all duration-500 font-bold hover:bg-black hover:text-white hover:cursor-pointer p-3 "
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
