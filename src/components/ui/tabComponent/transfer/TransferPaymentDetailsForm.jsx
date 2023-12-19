import React from "react";
import AppSelect from "@/components/ui/appSelect";
import DatePickers from "@/components/datePicker";

const TransferPaymentDetailsForm = () => {
  return (
    <div className="px-8">
      <form action="">
        <div className="flex items-center mb-5">
          <label
            for="amount"
            className="block mb-2 font-bold text-black w-[15rem]"
          >
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
          <DatePickers />
        </div>
      </form>
      <div className="text-black text-md font-light leading-10">
        About Pay Anyone payments Check correct account details. It is your
        responsibility to ensure that the account details you provide are
        correct. If you enter or select an incorrect BSB or account number, your
        payment may be unsuccessful or funds may be sent to the wrong account
        and it may not be possible to recover the funds from an unintended
        recipient. BOQ does not match, verify or check the account names and
        numbers and relies solely on the account number details to process
        payments. Daily Pay Anyone transfer limits apply. Please refer to our
        Internet Banking Help Guide for more information. A secure token maybe
        required for pay anyone transfers based on your current VIP Limit.
        Please refer to our Internet Banking Help Guide for more information. To
        check your current VIP Limit within Internet Banking, go to Transfers &
        BPAY Change Daily Limit. Pay Anyone payments made after 5:00pm
        (Australian Eastern Standard Time) will be processed on the next
        business day. Future dated payment scheduled for a day that is not a
        Business Day may be processed on the next Business Day. Please ensure
        your payment does not exceed your daily Pay Anyone limit and you have
        available funds on the due date. Click "Continue" to proceed with the
        payment, or "Cancel" to return to the Transfers & BPAY page. Continue
        Cancel Copyright Sandstone Technology Pty Ltd [3.12.6.3 5FA1 56B1 BFCD]
      </div>
      <div className="flex gap-5">
        <button className="bg-yellow-500 text-white px-4 py-2">Continue</button>
        <button className="bg-gray-400 text-white px-4 py-2">Cancel</button>
      </div>
    </div>
  );
};

export default TransferPaymentDetailsForm;
