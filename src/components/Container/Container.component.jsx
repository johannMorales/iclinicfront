import React from "react";
import { Layout, Breadcrumb, Card } from "antd";

const BreadcrumbBlock = (breadcrumb) => {
  return (
    <React.Fragment>
      {breadcrumb.map(({ label, to }) => (
        <Breadcrumb.Item>{label}</Breadcrumb.Item>
      ))}
    </React.Fragment>
  );
};

const Container = ({ breadcrumb, children }) => {
  return (
    <Layout.Content style={{  backgroundColor: "#f3f3f3", marginTop: 64 }}>
      {breadcrumb ? <BreadcrumbBlock breadcrumb={breadcrumb} /> : null}
      <Card>{children}</Card>
    </Layout.Content>
  );
};

export default Container;
