import { Box } from '@mui/material'
import React from 'react'
import Stats from '../../components/Stats'
import Consultations from '../../components/Stats/Consultations'
import Chart from '../../components/Chart'

function Dashboard() {
  return (
    <>
       <Box
         display='flex'
         gap='1rem'
         padding='1rem'
         flexWrap='wrap'
       >
             <Box
             backgroundColor = '#303778'
             color='white'
             borderRadius='0.5rem'
             >
                   <Stats />
             </Box>
             <Box
              >
                    <Consultations />
             </Box>
             <Box
              >
                    <Chart />
             </Box>
       </Box>  
    </>
  )
}

export default Dashboard