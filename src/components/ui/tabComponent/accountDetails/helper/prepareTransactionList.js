/* eslint-disable indent */
import { size } from "lodash";
import dayjs from "dayjs";
import { formatMoney } from "@/utils";

const getCurrency = (data) => {
  return data === "usd" ? "$" : "€";
};

export const prepareTransactionList = (data = [], currentBankAccountInfo) => {
  console.log("currentBankAccountInfo: ", currentBankAccountInfo);
  // console.log("data: ", data);
  if (size(data))
    return data?.map((item, index) => {
      return {
        key: index,
        date: dayjs(item?.payment_date)?.format("DD/MM/YYYY"),
        name: currentBankAccountInfo?.details?.account_name,
        description: item?.description,
        debit:
          item?.to_account?.account_number !== currentBankAccountInfo?.details?.account_number &&
          currentBankAccountInfo?.details?.account_number !== item?.other_payee_account_number
            ? `${getCurrency(currentBankAccountInfo?.details?.currency_type) || ""} ${
                item?.amount_to_send
              }`
            : "0",
        credit:
          item?.from_account?.account_number !== currentBankAccountInfo?.details?.account_number ||
          currentBankAccountInfo?.details?.account_number === item?.other_payee_account_number
            ? `${getCurrency(currentBankAccountInfo?.details?.currency_type) || ""} ${
                item?.amount_to_send
              }`
            : "0",
        balance: `${getCurrency(currentBankAccountInfo?.details?.currency_type) || ""} ${
          item?.to_account?.account_number !== currentBankAccountInfo?.details?.account_number &&
          currentBankAccountInfo?.details?.account_number !== item?.other_payee_account_number
            ? formatMoney(item?.sender_balance)
            : formatMoney(item?.receiver_balance)
        }`
      };
    });
  return false;
};
