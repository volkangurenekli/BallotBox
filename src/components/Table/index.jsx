import React from "react";
import Table from "antd/lib/table";

const AppTable = ({ dataSource, vote, remove }) => {
  const columns = [
    {
      title: "Full Name",
      dataIndex: "fullName",
    },
    {
      title: "Number Of Votes",
      dataIndex: "numberOfVotes",
    },
    {
      title: "Creation Date",
      dataIndex: "creationDate",
      render: (text) => <span>{new Date(text).toISOString().replace(/([^T]+)T([^\.]+).*/g, "$1 $2")}</span>,
    },
    {
      title: "Last Vote",
      dataIndex: "lastVote",
      render: (text) => <span>{new Date(text).toISOString().replace(/([^T]+)T([^\.]+).*/g, "$1 $2")}</span>,
    },
    {
      title: "Up Vote",
      dataIndex: "",
      render: (text, record, index) => <button onClick={() => vote(index, 1)}>Up</button>,
    },
    {
      title: "Down Vote",
      dataIndex: "",
      render: (text, record, index) => <button onClick={() => vote(index, -1)}>Down</button>,
    },
    {
      title: "Delete",
      dataIndex: "",
      render: (text, record, index) => <button onClick={() => remove(index)}>Delete</button>,
    },
  ];

  return <Table columns={columns} dataSource={dataSource} pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ["5", "10", "50"] }} rowKey={(record) => record.creationDate} />;
};

export default AppTable;
