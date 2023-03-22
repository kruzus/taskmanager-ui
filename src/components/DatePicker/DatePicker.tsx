import React, { FormEvent, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import moment, { Moment } from "moment";

interface DateRange {
  startDate: string | null;
  endDate: string | null;
}

//todo: make a fucntion to diff dates giving 2 dates.

export const DatePicker = () => {
  const [value, setValue] = useState<DateRange>({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (
    newValue: DateRange,
    e?: FormEvent<HTMLInputElement>,
  ) => {
    e?.preventDefault
    const { startDate, endDate } = newValue;

    setValue(newValue);

    const STARTDATE = moment(startDate);
    const ENDATE = moment(endDate);

    const daysDiff = ENDATE.diff(STARTDATE, "days");

    // setValue(newValue);

    console.log(daysDiff);
  };

  return (
    <Datepicker
      startWeekOn="mon"
      value={value}
      onChange={handleValueChange}
      displayFormat="MM/DD/YYYY"
      placeholder="Start from and end date to give yourself deadlines."
    />
  );
};
