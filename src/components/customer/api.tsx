import axios from 'axios';
import { getFakeData, getFakeUserDetail } from './fakeData';
import { IUser, IUserDetail } from '../interface';

export const getCustomerList = async (): Promise<IUser[]> => {
  const res = await axios.get('/api/Customer');
  if (res.status === 200) {
    const { data } = res;
    return data.map((user: any) => {
      const { id, personalId, name } = user;
      const newUser: IUser = {
        key: id,
        id: personalId,
        name: name
      };
      return newUser;
    });
  }
  return []
};
