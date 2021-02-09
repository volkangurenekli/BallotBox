import React from "react";
import Table from "antd/lib/table";

const AppTable = ({ dataSource, vote, remove }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "fullName",
      fixed: "left",
      width: 150,
    },
    {
      title: "Votes",
      dataIndex: "numberOfVotes",
      fixed: "left",
      width: 55,
    },
    {
      title: "Creation",
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
      render: (text, record, index) => <img className="icon" src="assets/up.svg" alt="up" onClick={() => vote(index, 1)}></img>,
    },
    {
      title: "Down Vote",
      dataIndex: "",
      render: (text, record, index) => <img className="icon" src="assets/down.svg" alt="down" onClick={() => vote(index, -1)}></img>,
    },
    {
      title: "Delete",
      dataIndex: "",
      render: (text, record, index) => <img className="icon remove" src="assets/remove.svg" alt="remove" onClick={() => remove(index)}></img>,
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ["5", "10", "50"] }}
      rowKey={(record) => record.creationDate}
      scroll={{ x: 1200, y: 400 }}
    />
  );
};

export default AppTable;
