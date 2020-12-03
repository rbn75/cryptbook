import React from 'react'
import {Layout, Menu, Row, Col} from 'antd'
import {Link} from 'react-router-dom'


const {Header, Content, Footer}=Layout
function LayoutApp({children}) {
    return (
        <div>
            <Layout className="layout">
    <Header style={{textAlign:"center"}}>
      <div className="logo" />
      <Row>
          <Col span={12}>
      <Menu theme="dark" mode="horizontal" >
        <Menu.Item key="1">
          <Link to='/btc'>BTC</Link>
          </Menu.Item>
        <Menu.Item key="2">
          <Link to='/eth'>ETH</Link>
          </Menu.Item>
        <Menu.Item key="3">
          <Link to='/xrp'>LTC</Link>
          </Menu.Item>
      </Menu>
      </Col>
      <Col span={12}>
      <Menu theme="dark" mode="horizontal" style={{textAlign:"right"}}>
        <Menu.Item key="1">
          <Link to='/profile'>Profile</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to='/login'>Login</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to='/signup'>Signup</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to='/logout'>Logout</Link>
        </Menu.Item>
      </Menu>
      </Col>
      </Row>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <div className="site-layout-content">{children}</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Created by Luis Gabriel Valenzuela and Rubén Rodríguez</Footer>
  </Layout>,
        </div>
    )
}

export default LayoutApp
