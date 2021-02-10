import React from "react";
import { Popconfirm, message } from "antd";
import "./style.css";

const Card = ({ id, fullName, numberOfVotes, creationDate, lastVote, vote, remove }) => {
  const confirm = (param) => {
    remove(param);
    message.success("Candidate Removed!");
  };

  const cancel = () => {
    message.error("Candidate Not Removed");
  };

  return (
    <div className="card">
      <div className="content">
        <p className="title">
          {fullName} <br /> Votes : {numberOfVotes}
        </p>
        <p className="copy">
          Last Vote : {new Date(lastVote).toISOString().replace(/([^T]+)T([^\.]+).*/g, "$1 $2")}
          <br />
          Creation : {new Date(creationDate).toISOString().replace(/([^T]+)T([^\.]+).*/g, "$1 $2")}
          <br />
          <br />
          Up <img className="icon" src="assets/up.svg" alt="up" onClick={() => vote(id, 1)} />
          {" - "}
          <img className="icon" src="assets/down.svg" alt="down" onClick={() => vote(id, -1)} /> Down
        </p>
        <button className="btn">
          <Popconfirm title="Are you sure to delete this candidate?" onConfirm={() => confirm(id)} onCancel={() => cancel()} okText="Remove" cancelText="No">
            <img className="icon remove" src="assets/remove.svg" alt="remove"></img>
          </Popconfirm>
        </button>
      </div>
    </div>
  );
};

export default Card;
