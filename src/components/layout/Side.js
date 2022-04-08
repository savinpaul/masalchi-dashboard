import { Card, Checkbox, Radio, Row } from "antd";

function Side() {
  return (
    <>
      <div className="brand">
        <span>Masalchi</span>
      </div>
      <hr />
      <Row gutter={[24, 0]}>
        <Card
          title="Brand"
          bordered={true}
          className="mb-12"
          style={{ width: 200 }}
        >
          <Checkbox onChange={(e) => e.target.checked}>BT</Checkbox>
          <br />
          <Checkbox onChange={(e) => e.target.checked}>Virgin Media</Checkbox>
          <br />
          <Checkbox onChange={(e) => e.target.checked}>Sky</Checkbox>
          <br />
          <Checkbox onChange={(e) => e.target.checked}>Vodafone</Checkbox>
          <br />
        </Card>
        <Card
          title="Price"
          className="mb-12"
          bordered={true}
          style={{ width: 200 }}
        >
          <Radio.Group defaultValue="a">
            <Radio value="a">0-10</Radio> <br />
            <Radio value="b">10-20</Radio> <br />
            <Radio value="c">20-30</Radio> <br />
            <Radio value="d">All</Radio> <br />
          </Radio.Group>
        </Card>
        <Card
          title="Speed"
          className="mb-12"
          bordered={true}
          style={{ width: 200 }}
        >
          <Radio.Group defaultValue="a">
            <Radio value="a">0-15</Radio> <br />
            <Radio value="b">15-30</Radio> <br />
            <Radio value="c">30-60</Radio> <br />
            <Radio value="d">All</Radio> <br />
          </Radio.Group>
        </Card>
        <Card
          title="Duration"
          className="mb-12"
          bordered={true}
          style={{ width: 200 }}
        >
          <Radio.Group defaultValue="a">
            <Radio value="a">0-1 year</Radio> <br />
            <Radio value="b">1-2 year</Radio> <br />
            <Radio value="c">All</Radio> <br />
          </Radio.Group>
        </Card>
      </Row>
    </>
  );
}

export default Side;
