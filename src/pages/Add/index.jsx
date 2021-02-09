import React, { useState } from "react";
import { Form, Input, Button, DatePicker, InputNumber, Row, Col } from "antd";

const Add = ({ candidates, set }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const add = () => {
    if (name === "") {
      setError(true);
    } else {
      let candidate = {
        fullName: name,
        numberOfVotes: 0,
        creationDate: new Date(),
        lastVote: new Date(),
      };
      set([...candidates, candidate]);
      setName("");
    }
  };

  const _onChange = (e) => {
    setError(false);
    setName(e.target.value);
  };

  return (
    <Form layout={"vertical"}>
      <Form.Item label="Full Name" validateStatus={error ? "error" : ""} help={error ? "Please Enter Full Name" : "  "}>
        <Input placeholder="Enter Full Name" required onChange={(e) => _onChange(e)} value={name} />
      </Form.Item>

      <Row>
        <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 8 }}>
          <Form.Item label="Number Of Votes">
            <InputNumber min={0} max={10} disabled defaultValue={0} />
          </Form.Item>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 8 }}>
          <Form.Item label="Creation Date">
            <DatePicker placeholder={new Date()} showTime disabled />
          </Form.Item>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 8 }}>
          <Form.Item label="Last Vote">
            <DatePicker placeholder={new Date()} showTime disabled />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
        <Button type="primary" block onClick={() => add()}>
          ADD
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Add;
