import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Footer } = Layout;

type Props = {}

const FooterAdmin = (props: Props) => {
  return (
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
  )
}

export default FooterAdmin;