import React from 'react'
import { Box, Typography } from '@mui/material'

function Header({user}) {
  return (
    <>
       <Box display='grid'
       gap='1rem'
       marginTop='-2rem'>
            <Typography variant='h3' fontWeight='600'>WELCOME, DR. {user.firstName} {user.lastName}</Typography>
            <Typography position='relative' top='-0.9rem' fontWeight='lighter' variant='h6'>Check your latest updates on your account</Typography>
       </Box>
    </>
  )
}

export default Header