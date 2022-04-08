import { Col, Radio, Row, Table, Select } from "antd";
import React, { useState, useEffect } from "react";

import { getHistoricData } from "../shared/api";
import Dropdown from "../components/layout/Dropdown";
import DatepickerRange from "../components/layout/DatepickerRange";
const { Option } = Select;

function DashboardSP() {
  useEffect(() => {
    let data = getHistoricData();
    setData(data);
    filterHistoryData(data, startDate, endDate, selectVal);
  }, []);
  console.log("RENDER");
  const [data, setData] = useState([]);
  const [selectVal, setDropdownVal] = useState("BT");

  const sevenDayBefore = new Date();
  sevenDayBefore.setDate(sevenDayBefore.getDate() - 6);
  const [dateRange, setDateRange] = useState([sevenDayBefore, new Date()]);
  const [startDate, endDate] = dateRange;

  const dropArray = ["BT", "SKY", "VM"];

  const columns = [
    {
      title: "",
      dataIndex: "provider",
      key: "provider",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Total Products",
      dataIndex: "totalProducts",
      key: "totalProducts",
      render: (text) => <a>{text}</a>,
    },

    {
      title: "Added Today",
      key: "addedToday",
      dataIndex: "addedToday",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Price Hiked",
      key: "priceHiked",
      dataIndex: "priceHiked",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Price Dropped",
      key: "priceDropped",
      dataIndex: "priceDropped",
      render: (text) => <a>{text}</a>,
    },
  ];

  const [historyData, setHistoryData] = useState([]);
  const [select, setSelect] = useState(renderSelect());

  function handleSelectClick(val) {
    setDropdownVal(val);
    setSelect(renderSelect());
    filterHistoryData(data, startDate, endDate, val);
  }
  function handleDate(date) {
    setDateRange(date);
    console.log({ date });
    date[0] && date[1] && filterHistoryData(data, date[0], date[1], selectVal);
  }

  function renderSelect() {
    return dropArray.map((val, index) => (
      <Option key={index} value={val}>
        {val}
      </Option>
    ));
  }
  function filterHistoryData(data, startDat, endDat, val) {
    let startDateTime = startDat.setHours(0, 0, 0, 0); //.getTime();
    let endDateTime = endDat.getTime();
    setHistoryData(
      data.filter((d) => {
        const dataDateTime = new Date(d.date).getTime();
        let retVal = false;
        if (
          d.provider === val &&
          dataDateTime >= startDateTime &&
          dataDateTime <= endDateTime
        ) {
          retVal = true;
        }
        return retVal;
      })
    );
  }
  return (
    <>
      <div className="layout-content">
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col
            span={12}
            className="mb-24"
            style={{ marginBottom: 24, marginTop: 24 }}
          >
            <Radio.Group defaultValue="broadband" buttonStyle="solid">
              <Radio.Button value="broadband">Broadband</Radio.Button>
              <Radio.Button value="mobile">Mobile</Radio.Button>
              <Radio.Button value="tv">TV</Radio.Button>
            </Radio.Group>
          </Col>
        </Row>
        <div className="tabled">
          <Row gutter={[24, 0]} style={{ width: "90%" }}>
            <Col span={24} style={{ marginBottom: 24, marginTop: 24 }}>
              <div className="table-responsive">
                <h2>Dashboard</h2>
                <Table
                  columns={columns.filter((d) => d.key !== "date")}
                  dataSource={data}
                  pagination={{ total: data.length, pageSize: 5 }}
                  className="ant-border-space"
                />
              </div>
            </Col>
          </Row>
          <h2>History</h2>

          <Row gutter={[24, 0]} style={{ width: "90%" }}>
            <Col span={12}>
              <div>
                Service Provider{" "}
                <Dropdown
                  options={select}
                  defaultValue="BT"
                  onChange={handleSelectClick}
                ></Dropdown>
              </div>
            </Col>
            <Col span={12} style={{ display: "inline-flex" }}>
              Date range:
              <DatepickerRange
                startDate={startDate}
                endDate={endDate}
                onChange={(val) => handleDate(val)}
              />
            </Col>
          </Row>

          <Row gutter={[24, 0]} style={{ width: "90%" }}>
            <Col span={24} style={{ marginBottom: 24, marginTop: 5 }}>
              <div className="table-responsive" style={{ marginTop: 24 }}>
                <Table
                  columns={columns}
                  dataSource={historyData}
                  pagination={{ total: historyData.length, pageSize: 5 }}
                  className="ant-border-space"
                />
              </div>
            </Col>
          </Row>
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <Col
              span={12}
              className="mb-24"
              style={{ marginBottom: 24, marginTop: 24 }}
            ></Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default DashboardSP;
