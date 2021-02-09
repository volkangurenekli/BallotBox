import React, { useState, useEffect } from "react";
import Table from "../../components/Table";

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
    <section>
      <button onClick={() => setSortCategory("numberOfVotes")}>numberOfVotes</button>
      <hr />
      <button onClick={() => setSortCategory("-numberOfVotes")}>-numberOfVotes</button>
      <hr />
      <button onClick={() => setSortCategory("-lastVote")}>-lastVote</button>

      <Table dataSource={dataSource} vote={vote} remove={remove} />
    </section>
  );
};

export default Home;
