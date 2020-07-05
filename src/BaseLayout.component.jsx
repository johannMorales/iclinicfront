import React from "react";
import "./BaseLayout.styles.css";
import { Layout, Breadcrumb } from "antd";
const { Header, Content, Footer } = Layout;

const BaseLayout = ({ children }) => {
  return (
    <Layout className="base-layout">
      <Header>
        <div className="logo" />
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Pacientes</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>iClinic ©2020</Footer>
    </Layout>
  );
};

export default BaseLayout;
