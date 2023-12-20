export const prepareBankAccountList = (data) => {
  return data?.map((item) => ({
    key: item?.account_number,
    title: `A/C: ${item.account_number} Name: ${item?.account_name} Balance: ${
      item?.currency_type === "usd" ? "$" : "€"
    }${item.balance}`,
    value: item?.account_number,
    details: { ...item }
  }));
};
