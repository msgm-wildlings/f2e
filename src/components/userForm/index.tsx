import React, { FC } from 'react';
import { Form, Input, Modal } from 'antd';
import { IUserForm } from '../interface';
// eslint-disable-next-line
const _UserForm: FC<IUserForm> = ({ visible, onCancel, onSummit, form }) => {
  //   const [users, setUsers] = useState<Array<IUserList>>([]);
  //   const [filterNameOrId, setFilterNameOrId] = useState('');
  // eslint-disable-next-line
  const { getFieldDecorator } = form;
  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      onOk={onSummit}
      title="Create a new collection"
      okText="Create"
    >
      <Form onSubmit={onSummit}>
        <Form.Item label="姓名">
          {getFieldDecorator('name', {
            rules: [
              {
                type: 'name',
                message: 'The input is not valid name!'
              },
              {
                required: true,
                message: 'Please input your E-mail!'
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="E-mail">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!'
              },
              {
                required: true,
                message: 'Please input your E-mail!'
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="綽號">
          {getFieldDecorator('nickname', {
            rules: [
              {
                required: true,
                message: 'Please input your nickname!',
                whitespace: true
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="地址">
          {getFieldDecorator('residence', {
            rules: [
              {
                required: true,
                message: 'Please select your habitual residence!'
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="電話號碼">
          {getFieldDecorator('phone', {
            rules: [
              { required: true, message: 'Please input your phone number!' }
            ]
          })(<Input addonBefore="09" style={{ width: '100%' }} />)}
        </Form.Item>
      </Form>
    </Modal>
  );
};
const UserForm = Form.create<IUserForm>({ name: 'form_in_modal' })(_UserForm);
export default UserForm;
