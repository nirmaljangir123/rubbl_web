import React, { useState } from "react";
import { CustomButton, CustomInput, CustomInputFeild } from "../../components";
import { rubblelogo } from "../../assest";
import rubble from "../../assest/Logo/rubble.png";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";

// import bgimage from '../../assest/Logo/loginbgimage.jpg';
const Login = () => {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
    <div className="bg-gray-200 w-full h-screen flex ">
      <div className="w-9/12 md:flex m-auto">
        <div className="px-5 w-full md:w-1/2 bg-white py-4  ">
          <div className="text-center pb-6 w-full  ">
            <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 p-3 rounded-full w-1/5 flex m-auto">
              <img src={rubble} width={55} className="m-auto " />
            </div>
            <p className="text-lg font-semibold	">We are The Rubble Team </p>
          </div>
          <div className="text-center">
            <div className="">
              <p className="text-sm">Please Login in your account</p>
            </div>
            <div>
              <CustomInput
                label="username"
                color="blue"
                className="bg-gray-200"
              />
              <CustomInput
                label={"passsword"}
                color="blue"
                className="bg-gray-200"
              />
              <CustomInputFeild
                label={"Confirm passsword"}
                color="blue"
                className="bg-gray-200 w-full outline-0"
                size="small"
                type={values.password ? "password" : "text"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="py-3">
              <CustomButton
                style="w-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
                text="LOG IN"
              />
            </div>
            <p className="py-3 underline">Forget passsword?</p>
            <div className="justify-center flex py-5">
              <div className="self-center">
                <p className="">Don't have an account? </p>
              </div>
              <div className="px-4">
                <CustomButton
                  variant="outlined"
                  style="bg-red"
                  text="Create new"
                >
                  <button></button>
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 flex">
          <div className="flex align-center self-center m-auto">
            <img src={rubblelogo} className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
