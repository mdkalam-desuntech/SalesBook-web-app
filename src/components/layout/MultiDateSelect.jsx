import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { FaCalendarAlt } from "react-icons/fa";
import { AiOutlineSwapRight } from "react-icons/ai";

const MultiDateSelect = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(moment().add(1, "month").toDate());

  return (
    <div className="w-full relative">
      <div className="flex justify-between items-center border border-gray-300 rounded-md px-3 py-1.5">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          dateFormat="dd MMM yyyy"
          customInput={<CustomInput />}
        />
        <div className="flex items-end">
          <AiOutlineSwapRight color="gray" className="mb-[1px] mr-2" />

          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            dateFormat="dd MMM yyyy"
            customInput={<CustomInput />}
          />
        </div>

        <FaCalendarAlt className="ml-2 text-gray-400" />
      </div>
    </div>
  );
};

const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
  <button
    type="button"
    className="bg-transparent border-none p-0 text-left text-gray-700"
    onClick={onClick}
    ref={ref}
  >
    {value}
  </button>
));

export default MultiDateSelect;
