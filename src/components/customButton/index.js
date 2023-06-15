import React from "react";
import { Button } from "@material-tailwind/react";

const CustomButton = (props) => {
  const { style, text, variant } = props;
  console.log("color-->", style);
  return (
    <div>
      <Button className={style} variant={variant}>
        {text}
      </Button>
    </div>
  );
};

export default CustomButton;
