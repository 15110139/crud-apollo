import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getListUser } from "../apollo/query";

import ListTodo from "./component/ListTodo";
import { Row, Col, Spin } from "antd";
import AddTodo from "./component/AddTodo";


class Todo extends Component {
  render() {
    if (this.props.data.loading) return <Spin size="large" />;
    if (this.props.data.error) return <div>co loi</div>;
    if (this.props.data.users) {
      const list = this.props.data.users.map((el, index) => (
        <ListTodo {...el} index={index} key={index} />
      ));
      return (
        <div style={{ padding:15 }}>
          
          <AddTodo />
          <div
            style={{
              backgroundColor: "#f0f0f0",
              padding: "5 0 0 0",
              marginTop: 5
            }}
          >
            <Row>
              <Col span={2}>No</Col>
              <Col span={8}>Id</Col>
              <Col span={6}>Name</Col>
              <Col span={8}>Action</Col>
            </Row>
            <hr />
          </div>

          {list}
        </div>
      );
    }
  }
}

export default graphql(getListUser)(Todo);
