import React from "react";

const CostomTable = () => {
  return (
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
                <tr className="border-b dark:border-gray-300">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    123456
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">KS Infra Ltd.</td>
                  <td className="whitespace-nowrap px-6 py-4">22-06-22</td>
                  <td className="whitespace-nowrap px-6 py-4">36t</td>

                  <td className="whitespace-nowrap px-6 py-4">Nirmal</td>
                  <td className="whitespace-nowrap px-6 py-4">$1512</td>
                  <td className="whitespace-nowrap px-6 py-4 text-orange-400">
                    Completed
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-green-600">
                    Paid
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-300">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    123456
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">KS Infra Ltd.</td>
                  <td className="whitespace-nowrap px-6 py-4">22-06-22</td>
                  <td className="whitespace-nowrap px-6 py-4">36t</td>

                  <td className="whitespace-nowrap px-6 py-4">Nirmal</td>
                  <td className="whitespace-nowrap px-6 py-4">$1512</td>
                  <td className="whitespace-nowrap px-6 py-4 text-orange-400">
                    Completed
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-green-600">
                    Paid
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-300">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    123456
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">KS Infra Ltd.</td>
                  <td className="whitespace-nowrap px-6 py-4">22-06-22</td>
                  <td className="whitespace-nowrap px-6 py-4">36t</td>

                  <td className="whitespace-nowrap px-6 py-4">Nirmal</td>
                  <td className="whitespace-nowrap px-6 py-4">$1512</td>
                  <td className="whitespace-nowrap px-6 py-4 text-orange-400">
                    Completed
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-green-600">
                    Paid
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostomTable;
