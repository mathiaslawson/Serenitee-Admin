import React from 'react'
import { Box } from '@mui/material'
import Calendar from '../Calendar'
import TimeLine from '../timeline'

function Tasks() {
  return (
    <>
      <Box backgroundColor='white' maxHeight='100vh' height='80vh' width='27rem' padding='1rem' boxShadow='1px 1px 10px #e5e6ec' borderRadius='0.3rem'>
         <Calendar />
         <TimeLine />
      </Box>
    </>
  )
}

export default Tasks