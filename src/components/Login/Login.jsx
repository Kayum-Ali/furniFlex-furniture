import { useState } from "react";
import "./Login.css";
import { HiOutlineEye } from "react-icons/hi";
import { HiOutlineEyeOff } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex justify-center items-center py-20">
      <div className="bg-[#FAFAFA] rounded-lg h-[70vh] w-[40vw] p-8">
        <h2 className="text-3xl font-bold mt-8">Welcome Back!</h2>
        <p className="text-[#929292] mt-2">
          Enter your Credentials to access your account
        </p>

        <div className="input-group">
          <input type="email" className="" required />
          <label htmlFor="" className="">
            Enter your Email
          </label>
        </div>
        <div className="input-group">
          <input
            type={`${showPassword ? "text" : "password"}`}
            className=""
            required
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 -translate-y-1/2 right-0 pr-3 text-xl"
          >
            {showPassword ? (
              <HiOutlineEyeOff></HiOutlineEyeOff>
            ) : (
              <HiOutlineEye></HiOutlineEye>
            )}
          </span>

          <label htmlFor="" className="">
            Enter your Password
          </label>
        </div>
        <div className="flex justify-end">
          <span className="text-blue-500">Forgate Password</span>
        </div>
        <div className="flex items-center gap-3 text-black mt-3">
          <input className="checkbox" type="checkbox" name="" id="chek" />
          <label htmlFor="chek">
            I agree to the{" "}
            <a className="link " href="">
              Terms & Policy
            </a>
          </label>
        </div>

        <button className="px-5 py-2.5 flex items-center justify-center gap-3 rounded-lg w-full text-white bg-black mt-5 ">
          {" "}
          Sign in
        </button>
        <div className="divider">OR</div>
        <div className="flex gap-5 justify-evenly   ">
          <div className="flex gap-3 items-center border px-8 py-2.5  w-full rounded-lg">
            <FcGoogle></FcGoogle>
            <h2 className="font-bold">Sign in With Google</h2>
          </div>
          <div className="flex gap-3 items-center border px-8 py-2.5  w-full rounded-lg">
            <BsApple></BsApple>
            <h2 className="font-bold">Sign in With Apple</h2>
          </div>
        </div>
        <div className="mt-5">
          {" "}
          <p className="text-center font-bold ">
            Dont have an account?{" "}
            <a className="link text-blue-500" href="">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
