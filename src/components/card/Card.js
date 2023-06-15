import React from "react";

const CostomCard = (props) => {
  console.warn("------>props", props);
  const { count, jobs, userpic, status, styling, hoverstyling, userpicstyle } =
    props.data;
  // console.warn("------?", count);
  return (
    <div
      className={`${styling} ${hoverstyling} 'block rounded-lg p-4 dark:bg-red-700'`}
    >
      <p className="mb-2 text-sm font-medium leading-tight ">{jobs}</p>
      <div className="flex justify-between">
        <p className="mb-2 text-2xl font-semibold	">{count}</p>
        <div className={`${userpicstyle}  text-black`}>{userpic}</div>
      </div>
      <p className="text-sm font-medium leading-tight">{status}</p>
    </div>
  );
};

export default CostomCard;
