import React, { FC, useState, useEffect } from 'react';
import { Input, Card, Table, Button, Row, Col } from 'antd';
import { getOrdersData } from './api';
import { IUser } from '../interface';
const { Search } = Input;

const Customer: FC = () => {
  const [users, setUsers] = useState<Array<IUser>>([]);
  const columns = [
    {
      title: '姓名',
      dataIndex: 'userName',
      key: 'userName'
    },
    {
      title: '身分證字號',
      dataIndex: 'userId',
      key: 'userId'
    }
  ];
  useEffect(() => {
    const fetchData = async () => {
      let result: Array<IUser>;
      result = await getOrdersData();
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
      <Table dataSource={users} columns={columns}></Table>
    </Card>
  );
};
export default Customer;
