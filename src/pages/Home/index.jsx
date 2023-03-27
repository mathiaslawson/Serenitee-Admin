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
        backgroundColor= 'read'
      >
         <Topbar />
         <Box
          display='grid'
          position='sticky'
          marginLeft='14rem'
          marginTop='-95vh'
          width='100%'
         >
             {currentRoute === '/dashboard' ? <Dashboard user={user} /> : null }
         </Box>
      </Box>
    </>
  )
}

export default index
