import { Box, Typography } from '@mui/material'
import { fontSize } from '@mui/system'
import React from 'react'
import ProgressCircle from '../charts/ProgressCircle'

function Stats() {
  return (
    <>
      <Box
        display='grid'
        padding='0.9rem'
        gap='0.4rem'
        width='max-content'
      >
            <Box
              display='flex'
              justifyContent='space-between'
              alignItems='baseline'
              
            >
                <Typography variant='h5'>
                    Patients
                </Typography>
                <Typography variant='h6' style={{
                    fontWeight: '100',
                    fontSize: '0.7rem',
                    color: 'white'
                }}>
                    This Month
                </Typography>
            </Box>

            <Box
              display='flex'
              justifyContent='space-evenly'
              alignItems='center'
              position='relative'
              left='-1rem'
            >
                  <Box>
                      <Typography fontSize='3rem'>
                          58
                      </Typography>
                  </Box>
                  <Box display='grid' position='relative' left='-1rem'>
                           <span style={{color:"#54b332"}}>- 68%</span>
                           <span style={{fontSize: '0.6rem'}}>New patients</span>
                  </Box>
            </Box>
            
            <Box
              display='flex'
              justifyContent='space-evenly'
              alignItems='center'
              position='relative'
              left='-1rem'
            >
                  <Box>
                      <Typography fontSize='3rem'>
                          72
                      </Typography>
                  </Box>
                  <Box display='grid' position='relative' left='-1rem' >
                           <span style={{color:"#54b332"}}>- 68%</span>
                           <span style={{fontSize: '0.6rem'}}>New patients</span>
                  </Box>
            </Box>

          

          
            <Box
              display='flex'
              justifyContent='space-between'
              alignItems='baseline'
              gap='rem'
            >
                <Typography variant='h5'>
                    Gender
                </Typography>
                <Typography variant='h6' style={{
                    fontWeight: '100',
                    fontSize: '0.7rem',
                    color: 'white'
                }}>
                    2023
                </Typography>
            </Box>



            <Box
              display='flex'
              justifyContent='space-between'
              gap='2rem'
            >
                  <Box width='7rem'>
                      <ProgressCircle />
                  </Box>
                  <Box display='grid' 
                  
                  gap='1rem'
                  >
                  <Box display='grid'
                  >
                           <span style={{color:"white", fontSize:'1rem'}} >Women</span>
                           <span style={{fontSize: '0.7rem'}}>10%(200)</span>
                  </Box>
                  <Box display='grid'>
                           <span style={{color:"white", fontSize: '1rem'}}>Man</span>
                           <span style={{fontSize: '0.7rem'}}>30%(500)</span>
                  </Box>
                  </Box>
            </Box>

      </Box>
    </>
  )
}

export default Stats