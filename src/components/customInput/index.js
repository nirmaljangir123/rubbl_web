import React from "react";
import { Input } from "@material-tailwind/react";

const CustomInput = (props) => {
  const { label, className ,color } = props;

  return (
    <div className="my-3">
      <Input
        size="md"
        label={label}
        className={className}
        color={color}
      />
    </div>
  );
};
export default CustomInput;
