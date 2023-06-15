import React from "react";

const AnliticCard = (props) => {
  const { pic, text, datatext,classname } = props;
	
  // console.warn("------?", count);
  return (
    <div className=" flex justify-between m-2">
      <div className=" flex">
        <img src={pic} width={45}/>
        <p className="text-sm self-center pl-3">{text}</p>
      </div>
      <div className="self-center text-sm">
        <p className={`${classname} `}>{datatext}</p>
      </div>
    </div>
  );
};

export default AnliticCard;
