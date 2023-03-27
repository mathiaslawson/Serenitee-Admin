import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Box, Typography } from '@mui/material';

export default function TimeLine() {
  return (
    <Timeline style={{marginLeft: '-15rem'}}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='success'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box display='grid'>
                 <Box>
                    <Typography>
                        8:30am
                    </Typography>
                 </Box>
                 <Box display='grid' backgroundColor='#f2faef ' padding='1rem' borderRadius='0.5rem'>
                     <Typography fontWeight='bold'>
                        Consultation
                     </Typography>
                     <Typography color='gray' fontWeight='light'>
                        8:30am - 9:30am
                     </Typography>
                     <br />
                     <Typography fontWeight='bold'>
                        Mathias Lawson
                     </Typography>
                 </Box>
          </Box>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='success'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='success'/>
        </TimelineSeparator>
        <TimelineContent>Sleep</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}