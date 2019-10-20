import axios from 'axios';
import { getFakeData, getFakeUserDetail } from './fakeData';
import { IUserList, IUserDetail } from '../interface';

export const getUserList = (): Promise<Array<IUserList>> =>
  Promise.resolve(getFakeData());
export const getUserDetail = (id?: string): Promise<IUserDetail> =>
  Promise.resolve(getFakeUserDetail(id));

export const getCustomer = (id?: string): any => {
  return axios
    .get('/api/Customer')
    .then(res => {
      console.warn(res);
    })
    .catch(err => {
      return Promise.reject(err);
    });
};
