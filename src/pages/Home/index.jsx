import React from 'react'
import { Box, Typography } from '@mui/material'
import './home.css'
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import Sidebar from '../../components/global/Sidebar';

function index({user, handleSignOut}) {
  return (
    <>
       <Sidebar />
    </>
  )
}

export default index
