import React from "react";
import { Button, Modal, Form, Input } from "antd";
import './style.css'
const CollectionCreateForm = Form.create({ name: "form_in_modal" })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form, id, name } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="CHI TIẾT"
          okText="OK"
          footer ={null}
          onOk={onCreate}
          onCancel={onCancel}
        >
          <Form layout="vertical" className='cusBtn'>
            <Form.Item label="NAME">
              {getFieldDecorator("name", { initialValue: name } )(<Input disabled/>)}
            </Form.Item>
            <Form.Item label="ID">
              {getFieldDecorator("id", { initialValue: id } )(<Input disabled/>)}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

class RemoveTodo extends React.Component {
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

     

      // form.resetFields();
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
        <Button type="primary" onClick={this.showModal} icon='info-circle'>
          Detail
        </Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCreate={this.handleCreate}
          onCancel={this.handleCancel}
          id={id}
          name={name}
        />
      </React.Fragment>
    );
  }
}
export default RemoveTodo
