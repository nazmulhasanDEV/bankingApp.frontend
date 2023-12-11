import React from "react";

const TransferAmountForm = () => {
  return (
    <div className="px-8">
      <form action="">
        <div className="flex items-center mb-5">
          <label for="payee" className="block mb-2 font-bold text-black w-[15rem]">
            Personalised Payee Name
          </label>
          <input
            type="text"
            id="payee"
            name="name"
            placeholder=""
            className="border border-gray-300 shadow p-1 w-[15rem] rounded "
          />
        </div>
        <div className="flex items-center mb-5">
          <label for="bsb" className="block mb-2 font-bold text-black w-[15rem]">
            Payee BSB
          </label>
          <input
            type="text"
            id="bsb"
            name="name"
            placeholder=""
            className="border border-gray-300 shadow p-1 w-[15rem] rounded "
          />
        </div>
        <div className="flex items-center mb-5">
          <label for="account" className="block mb-2 font-bold text-black w-[15rem]">
            Payee Account Number
          </label>
          <input
            type="text"
            id="account"
            name="name"
            placeholder=""
            className="border border-gray-300 shadow p-1 w-[15rem] rounded "
          />
        </div>
        <div className="flex items-center mb-5">
          <label for="name" className="block mb-2 font-bold text-black w-[15rem]">
            Payee Account Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder=""
            className="border border-gray-300 shadow p-1 w-[15rem] rounded "
          />
        </div>
        <div className="flex items-center mb-5">
          <label for="refernce" className="block mb-2 font-bold text-black w-[15rem]">
            Payee Refernce
          </label>
          <input
            type="text"
            id="refernce"
            name="name"
            placeholder=""
            className="border border-gray-300 shadow p-1 w-[15rem] rounded "
          />
        </div>
      </form>
    </div>
  );
};

export default TransferAmountForm;
