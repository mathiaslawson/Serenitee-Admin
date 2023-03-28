import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import Accordion from '../Accordion'

function Notifications() {
    const isAboveMediumScreens = useMediaQuery("(min-width:900px)")
  return (
    
   <>
       <Box >
        <Typography fontWeight='light' variant='h3' width='max-content' paddingBottom='1rem' >
            Latest Notifications
        </Typography>
            <Box width='100%'>
                 <Accordion />
            </Box>
       </Box>
   
   </>
  )
}

export default Notifications