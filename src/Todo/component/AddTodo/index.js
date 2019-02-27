import React from "react";
import { Button, Modal, Form, Input } from "antd";
import { addUser } from "./query";
import { graphql } from "react-apollo";
import { getListUser } from "../../../apollo/query";
import {openNotificationWithIcon} from '../Notification'
const CollectionCreateForm = Form.create({ name: "form_in_modal" })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="ADD TO DO"
          okText="Tạo mới"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="NAME">
              {getFieldDecorator("name", {
                rules: [
                  {
                    required: true,
                    message: "vui long nhap ten!"
                  }
                ]
              })(<Input />)}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

class AddTodo extends React.Component {
  state = {
    visible: false
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      // console.log("data nhận được: ", values);

      this.props
        .mutate({
          variables: {
            name: values.name
          },
          refetQueries: [{ getListUser }]
        })
        .then(res => {
          const { addUser } = res.data;
          console.log("addUser", addUser);
          openNotificationWithIcon("success");
        })
        .catch(err => {
          console.log("err", err);
          openNotificationWithIcon("error");
        });

      // form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Add Todo
        </Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}
export default graphql(addUser)(AddTodo);
