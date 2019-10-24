import faker from 'faker';
import { IUser, IUserDetail } from '../interface';
faker.seed(186);

const DATA_LENGTH = 50;

export const getFakeData = (): Array<IUser> => {
  const fakeData: Array<IUser> = [];

  for (let i = 0; i < DATA_LENGTH; i++) {
    fakeData[i] = {
      id: faker.random.number().toString(),
      name: faker.name.findName(),
      key: i
    };
  }
  return fakeData;
};

export const getFakeUserDetail = (id?: string): IUserDetail => {
  const fakeData: IUserDetail = { id };
  return fakeData;
};
