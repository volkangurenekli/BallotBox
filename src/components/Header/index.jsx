import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Layout, Popover } from "antd";

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header>
      <span>BALLOT BOX</span>
      <Link to="/">
        <Popover content="LIST" trigger="hover">
          <img className="icon" src="assets/list.svg" alt="list" />
        </Popover>
      </Link>

      <Link to="/add">
        <Popover content="ADD" trigger="hover">
          <img className="icon" src="assets/add.svg" alt="add" />
        </Popover>
      </Link>
    </Header>
  );
};

export default AppHeader;
