import React, { FC, useState } from 'react';
import './App.scss';
import { Menu, Icon, Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

interface AppProps {
  pathname?: string;
}
const App: FC<AppProps> = ({ pathname }: AppProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const Home = () => {
    return <h2>Home</h2>;
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
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[pathname!]}>
            <Menu.Item key="/">
              <Link to="/">
                <Icon type="user" />
                <span>Home</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/about">
              <Link to="/about">
                <Icon type="video-camera" />
                <span>About</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/users">
              <Link to="/users">
                <Icon type="upload" />
                <span>Users</span>
              </Link>
            </Menu.Item>
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
                  <Home />
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
