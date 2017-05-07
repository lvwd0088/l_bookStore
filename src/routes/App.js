import React, { PropTypes }  from 'react';
import { connect } from 'dva';
import styles from './App.css';
import { Layout,Icon,Menu } from 'antd';
import { Link } from 'dva/router';
const {Header,Sider,Content} = Layout;
const {SubMenu} = Menu;

function App({children}) {

  return (
    <div className={styles.normal}>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={false}
          >
          <div style={{height:'100vh'}}>
            <div className={styles.logo}/>
            <Menu mode="inline" theme="dark">
              <Menu.Item key="home">
                <Link to="/">
                  <Icon type="home" />
                  <span>首页</span>
                </Link>
              </Menu.Item>
              <SubMenu key="bookManager" title={<span><Icon type="book" />资源管理</span>}>
                <Menu.Item key="book">图书管理</Menu.Item>
                <Menu.Item key="author">作者管理</Menu.Item>
                <Menu.Item key="type">类型管理</Menu.Item>
                <Menu.Item key="label">标签管理</Menu.Item>
              </SubMenu>
              <Menu.Item key="userManager">
                <Link to="/user">
                  <Icon type="user" />
                  <span>用户管理</span>
                </Link>
              </Menu.Item>
            </Menu>
          </div>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className={styles.trigger}
              type='menu-fold'
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

App.propTypes={
  children:PropTypes.element.isRequired
}

export default connect(mapStateToProps)(App);
