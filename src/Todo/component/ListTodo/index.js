import React from "react";
import { Button, Row, Col } from "antd";
import { graphql } from "react-apollo";
import { getListUser } from "../../../apollo/query";
import { removeUser } from "../RemoveTodo/query";
import UpdateTodo from "./../UpdateTodo";
import RemoveTodo from "./../RemoveTodo";
import { openNotificationWithIcon } from "../Notification";

class ListTodo extends React.Component {
  removeTodo = () => {
    this.props
      .mutate({
        variables: {
          id: this.props.id
        },
        refetQueries: [{ getListUser }]
      })
      .then(res => {
        const { removeUser } = res.data;
        console.log("removeUser", removeUser);
        openNotificationWithIcon("success");
      })
      .catch(err => {
        console.log("err", err);
        openNotificationWithIcon("error");
      });
  };
  render() {
    const { id, name, index } = this.props;

    return (
      <React.Fragment>
        <Row>
          <Col span={2}>{index + 1}</Col>
          <Col span={8}>{id}</Col>
          <Col span={6}>{name}</Col>
          <Col span={8}>
            <UpdateTodo id={id} name={name} />
            <Button
              onClick={this.removeTodo}
              style={{ backgroundColor: "red", color: "white", marginRight: 5 }}
              icon="delete"
            >
              Delete
            </Button>
            <RemoveTodo id={id} name={name} />
          </Col>
        </Row>
        <hr />
      </React.Fragment>
    );
  }
}

export default graphql(removeUser)(ListTodo);
