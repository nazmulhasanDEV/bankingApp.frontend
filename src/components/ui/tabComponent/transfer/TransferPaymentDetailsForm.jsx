import React from 'react'
import AppSelect from "@/components/ui/appSelect";
import DatePickers from '@/components/datePicker';

const TransferPaymentDetailsForm = () => {
  return (
    <div className="px-8">
      <form action="">
        <div className="flex items-center mb-5">
          <label for="amount" className="block mb-2 font-bold text-black w-[15rem]">
            Payment amount
          </label>
          <input
            type="text"
            id="amount"
            name="name"
            placeholder=""
            className="border border-gray-300 shadow p-1 w-[15rem] rounded "
          />
        </div>
        <div className="flex items-center mb-5">
          <label for="" className="block mb-2 font-bold text-black w-[15rem]">
            Payment Frequency
          </label>
          <AppSelect customClass="w-[12vw]" />
        </div>
        <div className="flex items-center mb-5">
          <label for="" className="block mb-2 font-bold text-black w-[15rem]">
            Payment Date
          </label>
          <DatePickers/>
        </div>
      </form>
    </div>
  )
}

export default TransferPaymentDetailsForm