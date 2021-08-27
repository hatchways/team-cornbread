import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

const StaticDatePicker = () => {
  const [date, setDate] = useState<Date | null>(new Date());

  // prettier-ignore
  return (
    <>
     <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        autoOk
        orientation="landscape"
        variant="static"
        openTo="date"
        value={date}
        onChange={newDate => setDate(newDate)}
      />
    </MuiPickersUtilsProvider>
    </>
  );
};
export default StaticDatePicker;
