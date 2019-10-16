// import axios from 'axios';
import { getFakeData, getFakeUserDetail } from './fakeData';

export const getUserList = () => Promise.resolve(getFakeData());
export const getUserDetail = (id?: string) =>
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
