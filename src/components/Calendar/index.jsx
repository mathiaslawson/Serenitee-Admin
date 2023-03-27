import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Typography } from '@mui/material';

export default function DateCalendarFormProps() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateCalendar', 'DateCalendar']}>
        <Typography fontWeight='light' fontSize='1.5rem'>
            Your Schedule
        </Typography>
        <DemoItem >
          <DateCalendar defaultValue={dayjs('2022-04-17')} readOnly />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
