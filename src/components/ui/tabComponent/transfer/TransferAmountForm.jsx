import React from "react";

const TransferAmountForm = ({ onChangeHandler = () => {} }) => {
  return (
    <div className="px-8">
      <form action="">
        <div className="flex items-center mb-5">
          <label htmlFor="payee" className="block mb-2 font-bold text-black w-[15rem]">
            Personalised Payee Name
          </label>
          <input
            type="text"
            id="payee"
            name="name"
            placeholder=""
            className="border text-gray-900 border-gray-300 shadow p-1 w-[15rem] rounded "
          />
        </div>
        <div className="flex items-center mb-5">
          <label htmlFor="bsb" className="block mb-2 font-bold text-black w-[15rem]">
            Payee BSB
          </label>
          <input
            type="text"
            id="bsb"
            name="bsb"
            placeholder=""
            className="border text-gray-900 border-gray-300 shadow p-1 w-[15rem] rounded "
          />
        </div>
        <div className="flex items-center mb-5">
          <label htmlFor="account" className="block mb-2 font-bold text-black w-[15rem]">
            Payee Account Number
          </label>
          <input
            type="text"
            id="account"
            name="to_account_number"
            onChange={onChangeHandler}
            placeholder=""
            className="border text-gray-900 border-gray-300 shadow p-1 w-[15rem] rounded "
          />
        </div>
        <div className="flex items-center mb-5">
          <label htmlFor="name" className="block mb-2 font-bold text-black w-[15rem]">
            Payee Account Name
          </label>
          <input
            type="text"
            id="name"
            name="to_account_name"
            onChange={onChangeHandler}
            placeholder=""
            className="border text-gray-900 border-gray-300 shadow p-1 w-[15rem] rounded "
          />
        </div>
        <div className="flex items-center mb-5">
          <label htmlFor="refernce" className="block mb-2 font-bold text-black w-[15rem]">
            Payee Refernce
          </label>
          <input
            type="text"
            id="refernce"
            name="reference"
            onChange={onChangeHandler}
            placeholder=""
            className="border text-gray-900 border-gray-300 shadow p-1 w-[15rem] rounded "
          />
        </div>
      </form>
    </div>
  );
};

export default TransferAmountForm;
