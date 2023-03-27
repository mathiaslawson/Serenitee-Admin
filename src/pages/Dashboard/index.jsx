import { Box } from '@mui/material'
import React from 'react'
import Stats from '../../components/Stats'
import Consultations from '../../components/Stats/Consultations'
import Chart from '../../components/Chart'
import Tasks from '../../components/Stats/Tasks'

function Dashboard() {
  return (
    <>
       <Box
         display='flex'
         gap='1rem'
         padding='1rem'
         flexWrap='wrap'
         marginLeft='7rem'
       >
             <Box
             backgroundColor = '#303778'
             color='white'
             borderRadius='0.5rem'
             height='46vh'
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

             <Box
             >
                    <Tasks />
             </Box>
       </Box>  
    </>
  )
}

export default Dashboard