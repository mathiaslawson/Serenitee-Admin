import React from 'react'
import { Box } from '@mui/material'

function index() {
  return (
   <>
     <Box
       display='grid'
       gridAutoFlow='row'
     >
            <Box
             gridRow='10'
             gridColumn='10'
            >
                Bloack
            </Box>
            <Box>
                Bloack
            </Box>
            <Box>
                Bloack
            </Box>
            <Box>
                Bloack
            </Box>
     </Box>

    </>
  )
}

export default index