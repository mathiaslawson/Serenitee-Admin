import React from 'react'
import { Box } from '@mui/material'

function Dashboard({user}) {
  return (
   <>
     <Box
       display='grid'
       gridAutoFlow='column'
     >
            <Box
             gridRow='10'
             gridColumn='10'
            >
                WELCOME, DR .{user.firstName} 
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

export default Dashboard