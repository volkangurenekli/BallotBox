import React, { useState, Fragment } from "react";

const Add = ({ candidates, set }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const add = () => {
    if (name === "") {
      setError("ERROR");
    } else {
      let candidate = {
        fullName: name,
        numberOfVotes: 0,
        creationDate: new Date(),
        lastVote: new Date(),
      };
      set([...candidates, candidate]);
    }
  };

  const _onChange = (e) => {
    setError("");
    setName(e.target.value);
  };

  return (
    <Fragment>
      <div>
        fullName -
        <input type="text" value={name} onChange={(e) => _onChange(e)} required />
        <span>{error}</span>
      </div>
      <div>
        numberOfVotes - 0
        <input type="text" value={0} readOnly />
      </div>
      <div>
        creationDate - <input type="text" value={new Date()} readOnly />
      </div>
      <div>
        lastVote - <small>{new Date().toISOString}</small>
      </div>
      <hr />
      <button onClick={() => add()}>ADD</button>
    </Fragment>
  );
};

export default Add;
