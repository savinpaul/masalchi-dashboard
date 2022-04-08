import { Select } from "antd";

function Dropdown(props) {
  return (
    <>
      <Select
        defaultValue={props.defaultValue}
        style={{ width: 120 }}
        onChange={props.onChange}
      >
        {props.options}
      </Select>
    </>
  );
}

export default Dropdown;
