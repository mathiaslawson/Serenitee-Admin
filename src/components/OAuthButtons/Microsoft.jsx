import { Box, Typography } from '@mui/material'
import React from 'react'
import logo from './Microsoft.png'

function Microsoft() {
  return (
   <>
      
                 <button style={{
                  width:"100%",
                  padding: '0.5rem',
                  cursor: 'pointer',
                  border: 'none',
                  borderRadius: '0.4rem',
                  marginTop: '0.8rem'
                 }}>
                        <Box
                          display='flex'
                          gap='2rem'
                        >
                            <Box>
                               <img src={logo}></img>
                            </Box>
                            <Box
                              margin='5px 0'
                            >
                                 <Typography fontWeight='bold' color="#2E394C">
                                       Login with Microsoft 
                                 </Typography>
                            </Box>
                        </Box>
                 </button>
      
   
   </>
  )
}

export default Microsoft