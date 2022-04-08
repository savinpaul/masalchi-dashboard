import { useState, useEffect } from "react";
import { Layout } from "antd";
import Header from "./Header";
import Side from "./Side";
import { useLocation } from "react-router-dom";

const { Header: AntHeader, Content, Sider } = Layout;

function Main({ children }) {
  const [search, setSearch] = useState("");
  useEffect(() => {
    if (search.length > 2) {
      console.log(search);
    }
  }, [search]);
  const { pathname } = useLocation();

  return (
    <Layout className={`layout-dashboard`}>
      {pathname === "/dashboard" && (
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          trigger={null}
          width={250}
          theme="light"
          className="sider-primary ant-layout-sider-primary"
          style={{ background: "transparent" }}
        >
          <Side />
        </Sider>
      )}
      <Layout>
        {pathname === "/dashboard" && (
          <AntHeader>
            <Header setSearch={setSearch} search={search} />
          </AntHeader>
        )}
        <Content className="content-ant">{children}</Content>
      </Layout>
    </Layout>
  );
}

export default Main;
