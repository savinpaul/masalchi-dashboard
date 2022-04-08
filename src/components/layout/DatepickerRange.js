import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

let DatepickerRange = (props) => {
  return (
    <DatePicker
      selectsRange={true}
      startDate={props.startDate}
      endDate={props.endDate}
      onChange={(date) => {
        props.onChange(date);
      }}
      isClearable={false}
    />
  );
};

export default DatepickerRange;
