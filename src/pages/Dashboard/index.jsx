import { Box, useMediaQuery } from '@mui/material'
import React from 'react'
import Stats from '../../components/Stats'
import Consultations from '../../components/Stats/Consultations'
import Chart from '../../components/Chart'
import Tasks from '../../components/Stats/Tasks'
import Header from '../../components/Header'
import Notifications from '../../components/Notifications'

function Dashboard({user}) {
  const gridTemplateLargeScreens = `
       "a b c d"
       "a b c d"
       "e e e d"
       "e e e d"
  `
  const gridTemplateSmallScreens = `
       "a"
       "a"
       "b"
       "b"
       "c"
       "c"
       "d"
       "d"
       "d"
       "d"
       "e"
       "e"
       "e"
       "e"
       "e"
       "e"
       `
  const isAboveMediumScreens = useMediaQuery("(min-width:900px)")

  return (
    <>
       <Box
       display='flex'
       gap='0rem'
       padding='1rem'
       flexWrap='wrap'
       marginLeft='3rem'>
        <Header  user={user}/>     
       </Box>

       <Box
         display='grid'
        //  gridTemplateColumns='14rem 12rem 40rem 10rem'
        // gridAutoColumns='14rem 12rem 29rem'
        // gridTemplateColumns='14rem 12rem 40rem 10rem'
        // gridTemplateRows='27rem'
        // gap='1rem'
        //  padding='1rem'
         marginLeft='4rem'
         width='100%'
         height='100%'
         gap="0.3rem"
         sx={
          
          isAboveMediumScreens ? {
          gridTemplateColumns: 'repeat(4, min(200px, 1fr))',
          gridTemplateRows: 'repeat(4, minmax(20px, 1fr))',
          gridTemplateAreas: gridTemplateLargeScreens
         }:{
           gridAutoRows: '215px',
           gridTemplateAreas: gridTemplateSmallScreens,
           gridAutoColumns: '240px',
         }
        }

       >
        
             <Box
             backgroundColor = '#303778'
             color='white'
             borderRadius='0.5rem'
             height='46vh'
             gridArea='a'
             >
                   <Stats />
             </Box>
             <Box
             gridArea='b'
              >
                    <Consultations />
             </Box>
             <Box
             gridArea='c'
              >
                    <Chart />
             </Box>

             <Box
             gridArea='d'
             >
                    <Tasks />
             </Box>
             <Box gridArea='e'>
                    <Notifications gridArea='f'/>
             </Box>
            
       </Box>  
       
             
    </>
  )
}

export default Dashboard