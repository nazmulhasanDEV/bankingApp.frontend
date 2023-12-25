import React from "react";
import { File } from "react-feather";
import { useSelector } from "react-redux";
import { size } from "lodash";

const TableNew = () => {
  const { bankInfo } = useSelector((state) => state.bank);

  return (
    <div className="">
      <div className="">
        <div className="inline-block min-w-full shadow-md overflow-hidden">
          <div className="bg-orange-500 px-4 py-3">
            <h1 className="text-normal font-semibold flex items-center gap-2">
              <File className="w-6 h-6 text-white" />
              Accounts
            </h1>
          </div>
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Account Number
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Account Name
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Balance
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
              </tr>
            </thead>
            <tbody>
              {size(bankInfo?.bankAccountList) ? (
                bankInfo?.bankAccountList.map((item, index) => {
                  return (
                    <tr key={`account-${index}`}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex">
                          <div className="flex-shrink-0 w-10 h-10"></div>
                          <div className="">
                            <p className="text-gray-600 whitespace-no-wrap">
                              {item?.account_number || "Not added"}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {item?.account_name || "Not added"}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {item?.currency_type === "usd" ? "$" : "€"}
                          {item?.balance || "Not added"}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden
                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          <span className="relative">Paid</span>
                        </span>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                        <button
                          type="button"
                          className="inline-block text-gray-500 hover:text-gray-700"
                        >
                          <svg className="inline-block h-6 w-6 fill-current" viewBox="0 0 24 24">
                            <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <p className="text-black">No data found to show</p>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableNew;
