import React from "react";
import { Table, Popconfirm, message } from "antd";
import "./style.css";

const AppTable = ({ dataSource, vote, remove }) => {
  function confirm(index) {
    remove(index);
    message.success("Candidate Removed!");
  }

  function cancel() {
    message.error("Candidate Not Removed");
  }

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
      render: (text, record, index) => (
        <Popconfirm title="Are you sure to delete this candidate?" onConfirm={() => confirm(index)} onCancel={() => cancel()} okText="Remove" cancelText="No">
          <img className="icon remove" src="assets/remove.svg" alt="remove"></img>
        </Popconfirm>
      ),
    },
  ];

  return <Table columns={columns} dataSource={dataSource} pagination={{ defaultPageSize: 5 }} rowKey={(record) => record.creationDate} scroll={{ x: 1200, y: 400 }} />;
};

export default AppTable;
