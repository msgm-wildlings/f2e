import React, { FC, useState, useEffect, useCallback } from 'react';
import { Input, Card, Table, Icon, Button } from 'antd';
import { ColumnProps } from 'antd/es/table';

import { getCustomerList, getCustomerDetail } from './api';
import { IUser, ICustomerCourseDetail } from '../interface';
import UserForm from '../userForm';
const { Search } = Input;

const Customer: FC = () => {
  const [users, setUsers] = useState<Array<IUser>>([]);
  const [filterNameOrId, setFilterNameOrId] = useState('');
  const [customerCache, setCustomerCache] = useState<Array<IUser>>([]);
  const [userFormVisible, setUserFormVisible] = useState(false);
  const [customerDetail, setCustomerDetail] = useState<ICustomerCourseDetail>();

  const handleCancel = useCallback(() => setUserFormVisible(false), []);
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleSummit = useCallback(() => {}, []);
  const columns: ColumnProps<IUser>[] = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
      // eslint-disable-next-line
      render: (text, record, index) => {
        // eslint-disable-next-line
        const { id, name, key } = record;
        return (
          <Button
            onClick={async (): Promise<void> => {
              setCustomerDetail(await getCustomerDetail(key));
              setUserFormVisible(true);
            }}
            type="link"
            size="large"
          >
            {text}
          </Button>
        );
      },
    },
    {
      title: '身分證字號',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
    },
  ]

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const result: Array<IUser> = await getCustomerList()
      setCustomerCache(result)
      setUsers(result)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const searchUserName: IUser[] = customerCache.filter(customer =>
      customer.name!.includes(filterNameOrId)
    )
    const searchUserId: IUser[] = customerCache.filter(customer =>
      customer.id!.includes(filterNameOrId)
    )
    const newUser: IUser[] = [...searchUserName, ...searchUserId]
    setUsers(newUser)
  }, [filterNameOrId])

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
            setUserFormVisible(true);
          }}
          onChange={(e): void => setFilterNameOrId(e.target.value)}
        />
      }
    >
      <Table<IUser> columns={columns} dataSource={users} />

      <UserForm
        visible={userFormVisible}
        onCancel={handleCancel}
        onSummit={handleSummit}
        customerDetail={customerDetail}
      />
    </Card>
  );
};

export default Customer;
