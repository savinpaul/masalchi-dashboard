import { useEffect } from "react";
import { Row, Col, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function Header({ setSearch, search }) {
  useEffect(() => window.scrollTo(0, 0));

  return (
    <>
      <Row gutter={[24, 0]}>
        <Col span={24} md={18} className="header-control">
          <Input
            className="header-search"
            placeholder="Type here..."
            prefix={<SearchOutlined />}
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </Col>
      </Row>
    </>
  );
}

export default Header;
