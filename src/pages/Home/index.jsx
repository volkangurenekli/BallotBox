import React, { useState, useEffect, Fragment } from "react";
import Table from "../../components/Table";
import { Select, Divider } from "antd";
import "./style.css";
const { Option } = Select;

const Home = ({ candidates, set }) => {
  const [sortCategory, setSortCategory] = useState("");
  const [voted, setVoted] = useState(0);
  const [removed, setRemoved] = useState(0);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setSortCategory("-numberOfVotes");
    setDataSource(candidates);
  }, []);

  useEffect(() => {
    let newArray = [];
    candidates.sort(dynamicSort(sortCategory)).map((item) => {
      return newArray.push(item);
    });
    setDataSource(newArray);
    console.log("VOLKAN ~ newArray", newArray);
  }, [sortCategory, voted, removed]);

  const vote = (index, value) => {
    let newArray = candidates;
    newArray[index].numberOfVotes = newArray[index].numberOfVotes + value;
    newArray[index].lastVote = new Date();
    set(newArray);
    let counter = voted + 1;
    setVoted(counter);
  };

  const remove = (index) => {
    let newArray = candidates;
    newArray.splice(index, 1);
    set(newArray);
    let counter = removed + 1;
    setRemoved(counter);
  };

  const dynamicSort = (property) => {
    let sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return (a, b) => {
      let result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  };

  return (
    <Fragment>
      <img className="icon" src="assets/sort.svg" alt="sort" />

      <Select defaultValue={{ value: "-numberOfVotes" }} labelInValue onChange={(value) => setSortCategory(value)}>
        <Option value="-fullName">Full Name Descend</Option>
        <Option value="fullName">Full Name Ascend</Option>
        <Option value="-numberOfVotes">Number Of Votes Descend</Option>
        <Option value="+numberOfVotes">Number Of Votes Ascend</Option>
        <Option value="-lastVote">Last Vote Descend</Option>
        <Option value="lastVote">Last Vote Ascend</Option>
        <Option value="-creationDate">Creation Date Descend</Option>
        <Option value="creationDate">Creation Date Ascend</Option>
      </Select>

      <Divider>TABLE OF CANDIDATES</Divider>

      <Table dataSource={dataSource} vote={vote} remove={remove} />
    </Fragment>
  );
};

export default Home;
