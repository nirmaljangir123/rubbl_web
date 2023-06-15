import React, { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@material-ui/core";
import { Password, Visibility, VisibilityOff } from "@mui/icons-material";

const CustomInputFeild = (props) => {
  const { label, className, color, size, InputProps } = props;

  // const [values, setValues] = React.useState({
  //   password: "",
  //   showPassword: false,
  // });

  // const handleClickShowPassword = () => {
  //   setValues({ ...values, showPassword: !values.showPassword });
  // };

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  // const handlePasswordChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };

  // const [values, setValues] = useState({
  //   password: "",
  //   showpassword: "false",
  // });

  // const handleClickShowPassword = () => {
  //   setValues({ ...values, showpassword: !values.showpassword });
  // };

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  // const handlePasswordChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };

  return (
    <TextField
      // id="outlined-basic"
      label={label}
      variant="outlined"
      className={className}
      color={color}
      size={size}
      InputProps={InputProps}
      // type={values.showPassword ? "text" : "password"}
      // onChange={handlePasswordChange("password")}
      // value={values.password}

      // type={values.showpassword ? "text" : "password"}
      // onChange={handlePasswordChange("password")}
      // value={values.password}
      // endAdornment={
      //   <InputAdornment position="end">
      //     <IconButton
      //       onClick={handleClickShowPassword}
      //       onMouseDown={handleMouseDownPassword}
      //     >
      //       {values.showpassword ? <Visibility /> : <VisibilityOff />}
      //     </IconButton>
      //   </InputAdornment>
      // }
    />
  );
};

export default CustomInputFeild;
