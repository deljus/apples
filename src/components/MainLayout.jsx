import React from 'react';
import { Layout } from 'antd';
import { withRouter, Link } from 'react-router-dom';
import { URLS } from '../core/constants';
import { HeaderText } from './Content';

const { Footer, Header, Content } = Layout;

const MainLayout = ({ children }) => (
  <Layout style={{ height: '100vh', background: 'white' }}>
    <Header>
      <HeaderText>
        <Link to={URLS.INDEX} >Apples application</Link>
      </HeaderText>
    </Header>
    <Content>{ children }</Content>
    <Footer>
      Apples application
    </Footer>
  </Layout>
);

export default withRouter(MainLayout);
