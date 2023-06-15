import React from "react";
import CostomCard from "../../components/card/Card";
import PrimarySearchAppBar from "../../components/navbar/Navbar";
import user from "../../assest/Ican/user.png";
import CostomTable from "../../components/table/CostomTable";
import { Graph } from "../../components/graph/Chart";
import SideBar from "../../components/sidebar/SideBar";
import Nav from "../../components/navbar/Nav";
import { CartData } from "../../mockup/desbordmockup/MockUp";
import AnliticCard from "../../components/card/AnlyticCard";
import { AnlaticData } from "../../mockup/desbordmockup/AntlicMockUp";
import { TableMockup } from "../../mockup/desbordmockup/TableMockup";
import CopyrightIcon from "@mui/icons-material/Copyright";
console.warn("------>cart data", CartData);

const Home = () => {
  return (
    <div>
      <SideBar />
      <div className="sm:ml-64 relative">
        {/* <div>
          <PrimarySearchAppBar />
        </div> */}
        <div className="sticky top-0 z-20">
          <Nav />
        </div>
        <div className="bg-gray-100 ">
          <div className="p-4 ">
            <p className="text-lg font-montserrat ">
              Welcome back, Nirmal jangir ias good boys
            </p>
            <p className="text-sm text-slate-500 py-3 font-montserrat font-sm">
              Dashboard Overview
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {CartData.map((carts) => {
                console.log("============>carts dataaa", carts);
                return (
                  <>
                    <CostomCard data={carts} />
                  </>
                );
              })}
            </div>
            <div className="w-full lg:flex ">
              <div className=" lg:w-3/4 mt-4">
                <Graph className="rounded" />
              </div>
              <div className=" lg:w-1/4 mt-4 ml-4 bg-white rounded">
                {/* <AnliticCard
                  data={{
                    count: "10/15",
                    jobs: "Drivers",
                    status: "Active Drivers",
                    styling: "bg-white",
                  }}
                /> */}
                <div className="flex justify-between p-2 text-sm">
                  <p>Delivery Analytics</p>
                  <p>Status</p>
                </div>
                <div className="h-48 overflow-y-auto p-2">
                  {AnlaticData.map((carts) => {
                    return (
                      <>
                        <AnliticCard
                          key={carts.id}
                          pic={carts.pic}
                          text={carts.text}
                          classname={`${
                            carts.datatext === "Active"
                              ? "text-green-500"
                              : "text-orange-500"
                          }`}
                          datatext={carts.datatext}
                        />
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="m-4 p-3 bg-white">
            <p className="text-base font-semibold"> Delivery Details</p>
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-center text-sm font-light">
                      <thead className="font-medium bg-blue-300">
                        <tr>
                          <th scope="col" className="px-6 py-4">
                            Order ID
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Site Name
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Delivery Date
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Loads
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Driver
                          </th>
                          <th scope="col" className="px-6 py-4">
                            $
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Job Status
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Payment Status{" "}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {TableMockup.map((tabledata, key) => {
                          return (
                            <>
                              <tr className="border-b dark:border-gray-300">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">
                                  {tabledata.orderid}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                  {tabledata.sitename}{" "}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                  {tabledata.Deliverydate}{" "}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                  {tabledata.loads}{" "}
                                </td>

                                <td className="whitespace-nowrap px-6 py-4">
                                  {tabledata.driver}{" "}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                  {tabledata.rupess}{" "}
                                </td>
                                <td
                                  className="whitespace-nowrap px-6 py-4 font-semibold"
                                  style={{
                                    color:
                                      tabledata.Jobstatus === "Completed"
                                        ? "#FB8C00"
                                        : "red",
                                  }}
                                >
                                  {tabledata.Jobstatus}{" "}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 ">
                                  <button
                                    type="button"
                                    class="text-white text-sm rounded-full text-sm px-4 py-2.5 text-center font-semibold"
                                    style={{
                                      backgroundColor:
                                        tabledata.paymentstatus === "Paid"
                                          ? "#A5D6A7"
                                          : "#FFAB91",
                                      color:
                                        tabledata.paymentstatus === "Paid"
                                          ? "#388E3C"
                                          : "#E64A19",
                                    }}
                                  >
                                    {tabledata.paymentstatus}
                                  </button>
                                </td>
                              </tr>
                            </>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky bottom-0 z-20">
          <footer className="bg-gray-100 drop-shadow-2xl flex text-gray-700 px-4 py-2 self-center">
            <CopyrightIcon />
            <p>2022 Rubbl All rights reserve</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Home;
