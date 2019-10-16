import React, { FC } from 'react';
import { Input, Modal, Form } from 'antd';

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
      <Form layout="vertical">
        <Form.Item label="Title">
          {getFieldDecorator('title', {
            rules: [
              {
                required: true,
                message: 'Please input the title of collection!'
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Description">
          {getFieldDecorator('description')(<Input type="textarea" />)}
        </Form.Item>
      </Form>
    </Modal>
  );
};
const UserForm = Form.create<IUserForm>({ name: 'form_in_modal' })(_UserForm);
export default UserForm;
