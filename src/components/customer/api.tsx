// import axios from 'axios';
import { getFakeData, getFakeUserDetail } from './fakeData';
import { IUserList, IUserDetail } from '../interface';

export const getUserList = (): Promise<Array<IUserList>> =>
  Promise.resolve(getFakeData());
export const getUserDetail = (id?: string): Promise<IUserDetail> =>
  Promise.resolve(getFakeUserDetail(id));

// return axios.get('/channel', { params: formData })
//             .then(res => {

//               const { code, data } = res.data
//               // const { xxxx } = data

//               // if (code === 0 && id) {
//               //   return Promise.resolve({
//               //     gameId  : id,
//               //     gameName: name,
//               //     icon,
//               //     brandId
//               //   })
//               // }

//               return fakeChannelList
//             })
//             .catch(err => {
//               return Promise.reject(err)
//             })
