import { Card, Col, Row, Descriptions } from "antd";
import { getAllProducts } from "../shared/api";

const data = getAllProducts();
function Dashboard() {
  let colStyle = { paddingLeft: 0, paddingRight: 10 };
  // const data = [
  //   {
  //     sp: "BT",
  //     price: "10",
  //     speed: "30",
  //     duration: "2",
  //   },
  //   {
  //     sp: "BT",
  //     price: "10",
  //     speed: "30",
  //     duration: "1",
  //   },
  //   {
  //     sp: "BT",
  //     price: "10",
  //     speed: "30",
  //     duration: "3",
  //   },
  //   {
  //     sp: "SKY",
  //     price: "10",
  //     speed: "30",
  //     duration: "1",
  //   },
  //   {
  //     sp: "VM",
  //     price: "10",
  //     speed: "30",
  //     duration: "1",
  //   },
  // ];

  function getCol(obj) {
    if (obj) {
      return (
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={6}
          xl={6}
          className="mb-24"
          style={colStyle}
        >
          <Card
            bordered={false}
            title={<h6 className="font-semibold m-0">{obj.packageName}</h6>}
            className="header-solid h-full card-profile-information"
            bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
          >
            <p className="text-dark"></p>
            <hr className="my-25" />
            <Descriptions title="Details">
              <Descriptions.Item label="Service provider" span={3}>
                {obj.provider}
              </Descriptions.Item>
              <Descriptions.Item label="Price" span={3}>
                $ {obj.price}
              </Descriptions.Item>
              <Descriptions.Item label="Speed" span={3}>
                {obj.speed} MBPS
              </Descriptions.Item>
              <Descriptions.Item label="Duration" span={3}>
                {obj.contractLength} months
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>
      );
    }
  }
  function getRow(i) {
    return (
      <Row gutter={[24, 0]}>
        {getCol(data[i])}
        {getCol(data[i + 1])}
        {getCol(data[i + 2])}
        {getCol(data[i + 3])}
      </Row>
    );
  }
  return (
    <>
      <div className="layout-content">
        {data.map((d, index) => {
          if (index === 0 || index % 3 === 0) {
            console.log("if", index);
            return getRow(index);
          } else {
            console.log("else", index);
            return <></>;
          }
        })}
        <Row gutter={[24, 0]}>
          {/* <Col
            xs={24}
            sm={24}
            md={12}
            lg={6}
            xl={6}
            className="mb-24"
            style={colStyle}
          >
            <Card
              bordered={false}
              title={<h6 className="font-semibold m-0">Broadband plan</h6>}
              className="header-solid h-full card-profile-information"
              bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
            >
              <p className="text-dark"></p>
              <hr className="my-25" />
              <Descriptions title="Details">
                <Descriptions.Item label="Service provider" span={3}>
                  BT
                </Descriptions.Item>
                <Descriptions.Item label="Price" span={3}>
                  $10
                </Descriptions.Item>
                <Descriptions.Item label="Speed" span={3}>
                  30 MBPS
                </Descriptions.Item>
                <Descriptions.Item label="Duration" span={3}>
                  1 year
                </Descriptions.Item>
              </Descriptions>
            </Card>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={6}
            xl={6}
            className="mb-24"
            style={colStyle}
          >
            <Card
              bordered={false}
              title={<h6 className="font-semibold m-0">Broadband plan</h6>}
              className="header-solid h-full card-profile-information"
              bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
            >
              <p className="text-dark"></p>
              <hr className="my-25" />
              <Descriptions title="Details">
                <Descriptions.Item label="Service provider" span={3}>
                  BT
                </Descriptions.Item>
                <Descriptions.Item label="Price" span={3}>
                  $10
                </Descriptions.Item>
                <Descriptions.Item label="Speed" span={3}>
                  30 MBPS
                </Descriptions.Item>
                <Descriptions.Item label="Duration" span={3}>
                  1 year
                </Descriptions.Item>
              </Descriptions>
            </Card>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={6}
            xl={6}
            className="mb-24"
            style={colStyle}
          >
            <Card
              bordered={false}
              title={<h6 className="font-semibold m-0">Broadband plan</h6>}
              className="header-solid h-full card-profile-information"
              bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
            >
              <p className="text-dark"></p>
              <hr className="my-25" />
              <Descriptions title="Details">
                <Descriptions.Item label="Service provider" span={3}>
                  BT
                </Descriptions.Item>
                <Descriptions.Item label="Price" span={3}>
                  $10
                </Descriptions.Item>
                <Descriptions.Item label="Speed" span={3}>
                  30 MBPS
                </Descriptions.Item>
                <Descriptions.Item label="Duration" span={3}>
                  1 year
                </Descriptions.Item>
              </Descriptions>
            </Card>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={6}
            xl={6}
            className="mb-24"
            style={colStyle}
          >
            <Card
              bordered={false}
              title={<h6 className="font-semibold m-0">Broadband plan</h6>}
              className="header-solid h-full card-profile-information"
              bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
            >
              <p className="text-dark"></p>
              <hr className="my-25" />
              <Descriptions title="Details">
                <Descriptions.Item label="Service provider" span={3}>
                  BT
                </Descriptions.Item>
                <Descriptions.Item label="Price" span={3}>
                  $10
                </Descriptions.Item>
                <Descriptions.Item label="Speed" span={3}>
                  30 MBPS
                </Descriptions.Item>
                <Descriptions.Item label="Duration" span={3}>
                  1 year
                </Descriptions.Item>
              </Descriptions>
            </Card>
          </Col> */}
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
