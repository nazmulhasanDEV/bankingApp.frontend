import { size } from "lodash";
import dayjs from "dayjs";

const getCurrency = (data) => {
  return data === "usd" ? "$" : "€";
};

export const prepareTransactionList = (data, currentBankAccountInfo) => {
  if (size(data))
    return data?.map((item, index) => {
      return {
        key: index,
        date: dayjs(item?.payment_date)?.format("DD/MM/YYYY"),
        name: currentBankAccountInfo?.account_name,
        description: item?.description,
        debit:
          item?.to_account?.account_number !== currentBankAccountInfo?.account_number
            ? `${getCurrency(currentBankAccountInfo?.currency_type) || ""}${item?.amount_to_send}`
            : "0",
        credit:
          item?.from_account?.account_number !== currentBankAccountInfo?.account_number
            ? `${getCurrency(currentBankAccountInfo?.currency_type) || ""}${item?.amount_to_send}`
            : "0",
        balance: currentBankAccountInfo?.balance
      };
    });

  return false;
};
