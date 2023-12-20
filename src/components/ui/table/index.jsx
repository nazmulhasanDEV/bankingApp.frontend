import React from "react";
import { Table } from "antd";
const columns = [
  {
    title: "Date",
    dataIndex: "date",
    width: 20,
  },
  {
    title: "Description",
    dataIndex: "description",
    width: 20,
  },
  {
    title: "Debit",
    dataIndex: "debit",
    width: 20,
  },
  {
    title: "Credit",
    dataIndex: "credit",
    width: 20,
  },
  {
    title: "Balance",
    dataIndex: "balance",
    width: 20
  },
];
// const data = [];
// for (let i = 0; i < 10; i++)
//   data.push({
//     key: i,
//     name: `Edward King ${i}`,
//     age: 32,
//     address: `London, Park Lane no. ${i}`,
//   });

const TableComponent = ({ data=[] }) => {
  // console.log("table data: ", data);
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{
        pageSize: 50,
      }}
      scroll={{
        y: 240,
      }}
    />
  );
};
export default TableComponent;