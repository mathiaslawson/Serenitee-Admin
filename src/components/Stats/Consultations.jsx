import React from 'react'
import { Box, Typography } from '@mui/material'

function Consultations() {
  return (
    <>
       <Box
         display='grid'
         width='17rem'
         gap='0.5rem'
       >
            <Box
             boxShadow='1px 1px 10px #e5e6ec'
             backgroundColor= 'white'
             padding='1rem'
             borderRadius='0.4rem'
            >
                <Typography fontWeight='light' fontSize='1.4rem'>
                     Consultations
                </Typography>
                <Typography fontWeight='lighter' fontSize='0.8rem' fontColor='gray'>
                     Today
                </Typography>

                <Box display='flex' justifyContent='space-between' gap='2rem' marginTop='2rem'>
                    <Box display='grid'>
                        <span style={{fontWeight: 'light', fontSize: '0.8rem'}} >Online</span>
                        <span style={{color: '#142196', fontWeight: 'light', fontSize: '2rem'}}>40</span>
                    </Box>
                    <Box display='grid'>
                        <span style={{fontWeight: 'light', fontSize: '0.8rem'}} >In-Person</span>
                        <span style={{color: '#142196', fontWeight: 'light', fontSize: '2rem'}}>8</span>
                    </Box>             
                </Box>
                <span style={{color: '#142196', fontWeight: 'light', fontSize: '0.8rem', float: 'right', marginTop: '1rem'}} >View all</span>
            </Box>

            <Box
             boxShadow='1px 1px 10px #e5e6ec'
             backgroundColor= 'white'
             padding='1rem'
             borderRadius='0.4rem'
            >
                <Typography fontWeight='light' fontSize='1.4rem' width='max-content'>
                     Satisfied Patients
                </Typography>
                <Typography fontWeight='lighter' fontSize='0.8rem' fontColor='gray' bgcolor='#dcf1d4' color='#84cc6a' width='max-content' padding='0.2rem' borderRadius='0.2rem'>
                     +10%
                </Typography>

                <Box display='flex' justifyContent='space-between' gap='2rem' marginTop='2rem'>
                    <Box display='grid'>

                        <span style={{color: '#142196', fontWeight: 'light', fontSize: '2rem'}}>300+</span>
                    </Box>
                           
                </Box>
                <span style={{color: '#142196', fontWeight: 'light', fontSize: '0.8rem', float: 'right', marginTop: '1rem'}} >View all</span>
            </Box>


      


            
       </Box>
    </>
  )
}

export default Consultations