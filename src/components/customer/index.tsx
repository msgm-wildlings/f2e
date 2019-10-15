import React, { FC, useState, useEffect } from 'react';
import { Input, Card, Table, Button, Row, Col } from 'antd';
import { ColumnProps } from 'antd/es/table';

import { getOrdersData } from './api';
import { User } from '../interface';
const { Search } = Input;

const Customer: FC = () => {
  const [users, setUsers] = useState<Array<User>>([]);
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

  return (
    <Card
      title={
        <Row gutter={16}>
          <Col xs={17} sm={18} md={19} lg={20} xl={21}>
            <Search
              placeholder="輸入姓名或身分證字號"
              enterButton="搜尋"
              size="large"
              onSearch={value => console.log(value)}
            />
          </Col>
          <Col xs={7} sm={6} md={5} lg={4} xl={3}>
            <Button
              size="large"
              block
              type="primary"
              icon="user-add"
              // loading={this.state.iconLoading}
              // onClick={this.enterIconLoading}
            >
              新增
            </Button>
          </Col>
        </Row>
      }
    >
      <Table<User> columns={columns} dataSource={users} />
    </Card>
  );
};
export default Customer;
