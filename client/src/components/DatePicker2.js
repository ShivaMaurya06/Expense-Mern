import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const DatePicker2 = (props) => {
  const [selectDate, setSelectedDate] = useState(null);

  return (
    <div>
      <DatePicker
        selected={selectDate}
        onChange={(date) => {
          setSelectedDate(date);
          const tempExpense = props.expense;
          tempExpense.date = date.toDateString();
          props.setExpense(tempExpense);
        }}
        className="p-3  w-3/4 rounded-md outline-none bg-violet-100 px-4 placeholder-[#fc7b54] mt-4 text-black"
        placeholderText="Date"
        showYearDropdown
      />
    </div>
  );
};

export default DatePicker2;
