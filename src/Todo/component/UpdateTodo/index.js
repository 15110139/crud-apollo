import React from "react";
import { Button, Modal, Form, Input} from "antd";
import {graphql} from 'react-apollo'
import {getListUser} from '../../../apollo/query'
import {updateUser} from './query'
import {openNotificationWithIcon} from '../Notification'

const CollectionCreateForm = Form.create({ name: "update" })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form, name } = this.props;
    
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="UPDATE THÔNG TIN"
          okText="Update"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="Name">
              {getFieldDecorator(
                "name",
                { initialValue: name },
                {
                  rules: [{ required: true, message: "Vui lòng nhập tên!" }]
                }
              )(<Input />)}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

class UpdateTodo extends React.Component {
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

      //console.log("data từ from: ", values);

      this.props
        .mutate({
          variables: { name: values.name, id: this.props.id },
          refetQueries: [{ getListUser}]
        })
        .then(res => {
          const { updateUser } = res.data;
          console.log("updateUser", updateUser);
          openNotificationWithIcon("success");
        })
        .catch(err => {
          console.log("err", err);
          openNotificationWithIcon("error");
        });

      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
      const {id, name} = this.props
    return (
      <React.Fragment>
        <Button type="primary" icon='edit' onClick={this.showModal} style={{marginRight: 5}}>
          Edit
        </Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          id={id}
          name={name}
        />
      </React.Fragment>
    );
  }
}
export default graphql(updateUser)(UpdateTodo)
