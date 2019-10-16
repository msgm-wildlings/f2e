import React from 'react';
import { FormComponentProps } from 'antd/es/form';

export interface IUserList {
  name?: string;
  id?: string;
  key?: number;
}

export interface IUserForm extends FormComponentProps {
  visible: boolean;
  onCancel: any;
  onSummit: any;
}

export interface IUserDetail {
  name?: string;
  id?: string;
  key?: number;
}
