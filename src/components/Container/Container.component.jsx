import React from "react";
import { Layout, Breadcrumb, Card } from "antd";
import { Link } from "react-router-dom";
const BreadcrumbBlock = ({ breadcrumb }) => {
  return (
    <Breadcrumb style={{ marginBottom: "12px" }}>
      {breadcrumb.map(({ label, to }, index) => (
        <React.Fragment>
          <Breadcrumb.Item>
            {to ? <Link to={to}>{label}</Link> : label}
          </Breadcrumb.Item>
        </React.Fragment>
      ))}
    </Breadcrumb>
  );
};

const Container = ({ breadcrumb, children, loading }) => {
  return (
    <Layout.Content style={{ backgroundColor: "#f3f3f3", marginTop: 64 }}>
      {breadcrumb ? <BreadcrumbBlock breadcrumb={breadcrumb} /> : null}
      <Card loading={loading}>{children}</Card>
    </Layout.Content>
  );
};

export default Container;
