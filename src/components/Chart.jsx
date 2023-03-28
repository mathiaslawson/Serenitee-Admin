import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Box, Typography, useMediaQuery } from '@mui/material';

const data = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

const Chart = () => {
  const largeScreens = 580
  const smallScreens = 270
  const isAboveMediumScreens = useMediaQuery("(min-width:900px)")

  return (
    <Box backgroundColor='white' boxShadow='1px 1px 10px #e5e6ec' padding='1rem' width={isAboveMediumScreens ? null : 270 } marginLeft={isAboveMediumScreens ? '-3rem' : null}>
    <Typography fontWeight='light' fontSize='1.4rem' paddingBottom='2rem' marginLeft='1rem'>
        Analytics
    </Typography>
    <LineChart width={isAboveMediumScreens ? largeScreens : smallScreens} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }} style={{marginLeft: '-1rem'}}>
      <XAxis dataKey="name" />
      {/* <YAxis /> */}
      <CartesianGrid strokeDasharray="1 3" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
    </Box>
  );
};

export default Chart;
