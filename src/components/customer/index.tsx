import React, { FC, useState, useEffect, useCallback } from 'react';
import { Input, Card, Table, Icon, Button } from 'antd';
import { ColumnProps } from 'antd/es/table';

import {
  getUserList,
  // getUserDetail
  getCustomer
} from './api';
import { IUserList } from '../interface';
import UserForm from '../userForm';
const { Search } = Input;

const Customer: FC = () => {
  const [users, setUsers] = useState<Array<IUserList>>([]);
  const [filterNameOrId, setFilterNameOrId] = useState('');
  const [customerCache, setCustomerCache] = useState<Array<IUserList>>([]);
  const [userFormVisible, setUserFormVisible] = useState(false);

  const handleCancel = useCallback(() => {
    setUserFormVisible(false);
  }, []);
  const handleSummit = useCallback(() => {}, []);
  const columns: ColumnProps<IUserList>[] = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
      // eslint-disable-next-line
      render: (text, record, index) => {
        const { id, name } = record;
        return (
          <Button
            onClick={(): void => {
              setUserFormVisible(true);
            }}
            type="link"
            size="large"
          >
            {text}
          </Button>
        );
      }
    },
    {
      title: '身分證字號',
      dataIndex: 'id',
      key: 'id',
      align: 'center'
    }
  ];

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const result: Array<IUserList> = await getUserList();
      getCustomer()
      setCustomerCache(result);
      setUsers(result);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const searchUserName: IUserList[] = customerCache.filter(customer =>
      customer.name!.includes(filterNameOrId)
    );
    const searchUserId: IUserList[] = customerCache.filter(customer =>
      customer.id!.includes(filterNameOrId)
    );
    const newUser: IUserList[] = [...searchUserName, ...searchUserId];
    setUsers(newUser);
  }, [filterNameOrId]);

  return (
    <Card
      title={
        <Search
          placeholder="輸入姓名或身分證字號"
          enterButton={
            <>
              <Icon type="user-add" />
              新增
            </>
          }
          size="large"
          onSearch={(value): void => {
            console.log('new user', value);
          }}
          onChange={(e): void => setFilterNameOrId(e.target.value)}
        />
      }
    >
      <Table<IUserList> columns={columns} dataSource={users} />

      <UserForm
        visible={userFormVisible}
        onCancel={handleCancel}
        onSummit={handleSummit}
      />
    </Card>
  );
};

export default Customer;
