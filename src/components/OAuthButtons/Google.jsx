import { Box, Typography } from '@mui/material'
import React from 'react'
import logo from './Google.png'

function Google() {
  return (
   <>
      
                 <button style={{
                  width:"100%",
                  padding: '0.5rem',
                  cursor: 'pointer',
                  border: 'none',
                  borderRadius: '0.4rem'

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
                                       Login with Gmail
                                 </Typography>
                            </Box>
                        </Box>
                 </button>
      
   
   </>
  )
}

export default Google