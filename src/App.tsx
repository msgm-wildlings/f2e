import React, { FC, useState } from 'react';
import './App.scss';
import { Menu, Icon, Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Customer from './components/customer';

const { Header, Sider, Content } = Layout;
const { Item } = Menu;
interface AppProps {
  pathname?: string;
}
const App: FC<AppProps> = ({ pathname }: AppProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const About = () => {
    return <h2>About</h2>;
  };

  const Users = () => {
    return <h2>Users</h2>;
  };

  return (
    <Router>
      <Layout style={{ height: '100vh' }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">
            <Icon type="home" />
            <div>&ensp;野人格鬥體適能</div>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[pathname!]}>
            <Item key="/">
              <Link to="/">
                <Icon type="user" />
                <span>會員</span>
              </Link>
            </Item>
            <Item key="/users">
              <Link to="/users">
                <Icon type="carry-out" />
                <span>課程</span>
              </Link>
            </Item>
            <Item key="/about">
              <Link to="/about">
                <Icon type="info-circle" />
                <span>關於野人</span>
              </Link>
            </Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', paddingLeft: 24 }}>
            <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={toggleCollapsed}
            />
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/users">
                  <Users />
                </Route>
                <Route path="/">
                  <Customer />
                </Route>
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};
App.defaultProps = {
  pathname: window.location.pathname
};

export default App;
