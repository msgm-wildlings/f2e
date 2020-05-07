/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/interface-name-prefix */
import { FormComponentProps } from 'antd/es/form';

export interface IUser {
  name?: string;
  id?: string;
  key?: number;
}

export interface IUserForm extends FormComponentProps {
  visible: boolean;
  onCancel: any;
  onSummit: any;
  customerDetail: ICustomerCourseDetail | undefined;
}

interface IPeriod {
  start: string;
  end: string;
}

interface ICourse {
  id: number;
  name: string;
  type: number;
  count?: number;
  period?: IPeriod;
}

interface ICustomer {
  id?: number;
  name?: string;
  personalId: string;
  email: string;
  address: string;
  birthday: string;
  phone: string;
  emergencyContact: string;
  emergencyPhone: string;
  guardianName: string;
  guardianPersonalId: string;
  guardianPhone: string;
  guardianBirthday: string;
  medicalCase: string;
}
export interface ICustomerCourseDetail {
  customer: ICustomer;
  courseDetail: ICourse[];
}
