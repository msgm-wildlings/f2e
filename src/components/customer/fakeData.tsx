import faker from 'faker';
import { IUserList } from '../interface';
faker.seed(186);

const DATA_LENGTH = 50;

export const getFakeData = () => {
  const fakeData: Array<IUserList> = [];

  for (let i = 0; i < DATA_LENGTH; i++) {
    fakeData[i] = {
      id: faker.random.number().toString(),
      name: faker.name.findName(),
      key: i
    };
  }
  return fakeData;
};

export const getFakeUserDetail = (id?: string) => {
  const fakeData: Array<IUserList> = [];
  for (let i = 0; i < DATA_LENGTH; i++) {
    fakeData[i] = {
      id,
      name: faker.name.findName(),
      key: i
    };
  }
  return fakeData;
};
