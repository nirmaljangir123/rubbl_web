import React, { useState } from "react";
import custommap from "../../assest/Ican/map.png";
import notification from "../../assest/Ican/notify.png";
import profile from "../../assest/Ican/profile.png";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton, MenuItem } from "@material-tailwind/react";
import { AccountCircle } from "@material-ui/icons";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Menu } from "@material-ui/core";
const Nav = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex justify-between bg-color2 px-3 py-2 ">
      <div className=" flex">
        <div className="self-center px-3 flex">
          <ViewHeadlineIcon className="flex md:hidden" />
        </div>
        <div>
          <button
            type="button"
            className=" border border-gray-400 focus:outline-none font-medium rounded-[7pt] text-sm  text-center p-1 flex items-center bg-white"
          >
            <PersonPinCircleIcon className="text-blue-500 " />
            <span className="text-color4">Newcastle</span>
          </button>
        </div>
      </div>
      <div className="flex ">
        <div className="relative w-full pr-3">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchIcon className="text-gray-600" />
          </div>
          <input
            type="text"
            id="simple-search"
            className="text-gray text-sm rounded-md  block w-full pl-10 p-2  dark:bg-blue-200 dark:placeholder-gray-600 dark:text-gray "
            placeholder="Search for job or anything …."
            required
          />
        </div>
        <div className="flex self-center justify-around">
          <NotificationsIcon className="text-white " />
          <AccountCircle className="text-white" />
          <span className="text-sm text-white px-2">Nirmal</span>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </div>
      </div>

      {/* <div>
        <button
          type="button"
          classNameName="flex rounded px-3 py-2 border-2 border-dark-600 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-"
        >
          <div>
            <img src={custommap} />
          </div>
          <div classNameName="self-center px-2">
            <p classNameName="text-orange-500 font-semibold">Newcastle</p>
          </div>
        </button>
      </div> */}
      {/* <div classNameName="flex">
        <div classNameName="relative  flex sm:w-full lg:w-70  flex-wrap items-stretch self-center">
          <input
            type="search"
            classNameName="relative m-0 flex-auto  rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-2  text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-400 bg-slate-200 "
            placeholder="Search for job or anything …."
            aria-label="Search"
            aria-describedby="button-addon1"
          />
        </div>
        <div classNameName="relative flex items-center">
          <div>
            <img src={notification} alt="no notification" />
          </div>
          <div>
            <img src={profile} alt="no pic" />
          </div>
          <div>
            <select data-te-select-init>
              <option value="1">Nirmal</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="4">Four</option>
            </select>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Nav;
