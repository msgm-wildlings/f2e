// import axios from 'axios';
import { getFakeData } from './fakeData';

/*
 * 取得渠道列表
 */
export const getOrdersData = () => Promise.resolve(getFakeData());

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
