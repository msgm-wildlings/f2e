import React, { FC, useState, useEffect } from 'react';
import { Input, Card, Table, Icon } from 'antd';
import { ColumnProps } from 'antd/es/table';

import { getOrdersData } from './api';
import { User } from '../interface';
const { Search } = Input;

const Customer: FC = () => {
  const [users, setUsers] = useState<Array<User>>([]);
  const [filterNameOrId, setFilterNameOrId] = useState('');
  const columns: ColumnProps<User>[] = [
    {
      title: '姓名',
      dataIndex: 'userName',
      key: 'userName',
      align: 'center'
    },
    {
      title: '身分證字號',
      dataIndex: 'userId',
      key: 'userId',
      align: 'center'
    }
  ];

  useEffect(() => {
    const fetchData = async () => {
      const result: Array<User> = await getOrdersData();
      setUsers(result);
    };
    fetchData();
  }, []);

  useEffect(() => {
    //filter
    const newUsers: Array<User> = [];
    setUsers(newUsers);
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
          onSearch={value => {
            console.log(value, filterNameOrId);
            console.log('new user');
          }}
          onChange={e => setFilterNameOrId(e.target.value)}
        />
      }
    >
      <Table<User> columns={columns} dataSource={users} />
    </Card>
  );
};
export default Customer;
