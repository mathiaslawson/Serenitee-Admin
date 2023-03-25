import React from 'react'
import { Box, Typography } from '@mui/material'
import './home.css'
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import Sidebar from '../../components/global/Sidebar';
import Topbar from '../../components/global/Topbar';
import Dashboard from '../Dashboard'

function index({user, handleSignOut}) {
    const currentRoute = window.location.pathname
  return (
    <>
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='baseline'
        alignContent='stretch'
        mb='0.25rem'
        p='0rem 0rem'
        color = 'black'
        gap='4rem'
        width='100%'
        flexWrap='wrap'
      >
         <Topbar />
         <Box
          display='grid'
          position='relative'
          marginLeft='7rem'
          marginTop='-95vh'
         >
             {currentRoute === '/dashboard' ? <Dashboard /> : null }
         </Box>
      </Box>
    </>
  )
}

export default index
