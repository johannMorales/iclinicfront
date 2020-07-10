import React from "react";
import "./BaseLayout.styles.css";
import { Layout } from "antd";
const { Header } = Layout;

const BaseLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100%" }}>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
      </Header>
      <div
        style={{ backgroundColor: "#f3f3f3", padding: "24px", height: "100%" }}
      >
        {children}
      </div>
    </Layout>
  );
};

export default BaseLayout;
