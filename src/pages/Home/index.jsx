import React, { useState, useEffect, Fragment } from "react";
import Card from "../../components/Card";
import { Select, Divider, List } from "antd";
import "./style.css";
import _ from "underscore";
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
    if (sortCategory.charAt(0) === "-") {
      setDataSource(_.sortBy(candidates, sortCategory.substr(1)).reverse());
    } else {
      setDataSource(_.sortBy(candidates, sortCategory));
    }
  }, [sortCategory, voted, removed]);

  const vote = (id, value) => {
    let object = _.find(candidates, (item) => {
      return item.id === id;
    });
    const result = candidates.filter((item) => item.id !== id);
    object.numberOfVotes += value;
    object.lastVote = new Date();
    result.push(object);
    set(result);
    let counter = voted + 1;
    setVoted(counter);
  };

  const remove = (id) => {
    set(_.without(candidates, _.findWhere(candidates, { id })));
    let counter = removed + 1;
    setRemoved(counter);
  };

  return (
    <Fragment>
      <img className="icon" src="assets/sort.svg" alt="sort" />

      <Select defaultValue={{ value: "-numberOfVotes" }} labelInValue onChange={(item) => setSortCategory(item.value)}>
        <Option value="-fullName">Full Name Descend</Option>
        <Option value="fullName">Full Name Ascend</Option>
        <Option value="-numberOfVotes">Number Of Votes Descend</Option>
        <Option value="numberOfVotes">Number Of Votes Ascend</Option>
        <Option value="-lastVote">Last Vote Descend</Option>
        <Option value="lastVote">Last Vote Ascend</Option>
        <Option value="-creationDate">Creation Date Descend</Option>
        <Option value="creationDate">Creation Date Ascend</Option>
      </Select>

      <Divider>LIST OF CANDIDATES</Divider>

      <List
        pagination={{
          defaultPageSize: 5,
        }}
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
          xxl: 5,
        }}
        dataSource={dataSource}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <Card id={item.id} fullName={item.fullName} numberOfVotes={item.numberOfVotes} creationDate={item.creationDate} lastVote={item.lastVote} vote={vote} remove={remove} />
          </List.Item>
        )}
      />
    </Fragment>
  );
};

export default Home;
