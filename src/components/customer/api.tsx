import axios from 'axios';
import { IUser, ICustomerCourseDetail } from '../interface';

export const getCustomerList = async (): Promise<IUser[]> => {
  const res = await axios.get('/api/Customer');
  if (res.status === 200) {
    const { data } = res;
    return data.map(
      (user: { id: number; personalId: string; name: string }) => {
        const { id, personalId, name } = user;
        const newUser: IUser = {
          key: id,
          id: personalId,
          name: name,
        };
        return newUser;
      }
    );
  }
  return [];
};
export const getCustomerDetail = async (
  id?: number
): Promise<ICustomerCourseDetail> => {
  const res = await axios.get(`/api/Customer/${id}`);
  // if (res.status === 200) {
  const result: ICustomerCourseDetail = res.data;
  return result;
  // }
};
