import React from "react";
import { Table ,Pagination} from "../../components";

export default function Index() {
  const columns = () => [
    {
      title: "名字",
      dataIndex: "name",
      render: (text, record, index) => {
        return "niadaisdj";
      },
    },
    {
      title: "年龄",
      dataIndex: "age",
    },
    {
      title: "地址",
      dataIndex: "dizhi",
      render: (text, record, index) => {
        return text;
      },
    },
    {
      title: "啦啦",
      dataIndex: "baba",
    },
  ];
  const dataSource = [
    { name: 18, age: 20, id: 1, baba: "张三" },
    { name: 17, age: 20, id: 2 },
    { name: 20, age: 20, id: 3 },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={dataSource} rowKey="id" />
      <Pagination></Pagination>
    </div>
  );
}
