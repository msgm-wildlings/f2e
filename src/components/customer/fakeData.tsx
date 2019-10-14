import * as faker from 'faker';
import { IUser } from '../interface';
faker.seed(186);

const DATA_LENGTH = 50;

export const getFakeData = () => {
  let fakeData: Array<IUser> = [];

  for (let i = 0; i < DATA_LENGTH; i++) {
    fakeData[i] = {
      userId: faker.random.number().toString(),
      userName: faker.name.findName(),
      key: i
    };
  }
  return fakeData;
};
