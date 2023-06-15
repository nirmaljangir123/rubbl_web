import React, { useState } from "react";
import rubblelogo from "../../assest/Logo/rubblelogo.png";
import CostomCard from "../../components/card/Card";
import Nav from "../../components/navbar/Nav";
import ArrowRight from "@mui/icons-material/ArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { LibraryAdd } from "@material-ui/icons";
const SideBar = () => {
  const [drop, setDrop] = useState(false);
  console.warn("-->state", drop);
  const dropdown = () => {
    setDrop(true);
  };
  const dropfalse = () => {
    setDrop(false);
  };
  return (
    <div>
      <aside
        className="fixed top-0 left-0  w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-2 py-4 overflow-y-auto bg-gray-50 dark:bg-color1">
          <div class="flex items-center pl-2.5 mb-5">
            <img src={rubblelogo} alt="Flowbite Logo" />
          </div>
          <ul className="space-y-3 font-montserrat font-base">
            {/* <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="ml-3">
                  <img src={rubblelogo} />
                </span>
              </a>
            </li> */}
            <li className="flex items-center p-2 rounded-lg dark:hover:bg-gray-700 ">
              <span className="ml-3 text-color2">Dashboard</span>
            </li>
            <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700">
              <span className=" ml-3 whitespace-nowrap">Jobs</span>
            </li>
            <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <span className="flex-1 ml-3 whitespace-nowrap">My Loads</span>
              <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-yellow-100 dark:text-dark-300">
                3
              </span>
            </li>
            <li className="">
              <button className="flex justify-between p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full">
                <span className="flex ml-3 ">Management</span>
                <span className="flex ">
                  {drop ? (
                    <KeyboardArrowDownIcon onClick={dropfalse} />
                  ) : (
                    <KeyboardArrowUpIcon onClick={dropdown} />
                  )}
                </span>
              </button>
              <div className={`${drop ? "display" : "hidden"}`}>
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDelayButton"
                >
                  <li className=" flex items-center p-2 text-gray-900 text-base	 rounded-lg dark:text-sky-200 hover:bg-gray-100 dark:hover:bg-gray-500 ml-3">
                    Bank Details & Invoices
                  </li>
                  <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-sky-200 hover:bg-gray-100 dark:hover:bg-gray-500 text-base ml-3">
                    Vehicle Management
                  </li>
                  <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-sky-200 hover:bg-gray-100 dark:hover:bg-gray-500 ml-3 text-base	">
                    Driver Management
                  </li>
                  <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-sky-200 hover:bg-gray-100 dark:hover:bg-gray-500 ml-3 text-base	">
                    Order History
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700">
              <span className="ml-3">state</span>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
