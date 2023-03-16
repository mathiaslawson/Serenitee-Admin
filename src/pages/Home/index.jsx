import React from 'react'
import { Box, Typography } from '@mui/material'
import './home.css'
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';

function index() {
  return (
    <Box
      style={{
        backgroundImage: 'linear-gradient(to bottom right, #5f2c82, #49a09d)',
        padding: '10rem 2rem',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: '-15rem'
      }}
    >
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        flex= '1 1 0'
        marginBottom= '2rem'
      >
        <Typography
          fontWeight='lighter'
          margin='10rem'
          fontSize='clamp(1.5rem, 8vw, 3rem)'
          style={{
            background: '-webkit-linear-gradient(#e8edff, #ede8ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'text-gradient 5s ease infinite'
          }}
        >
         Serenitee Admin v0.1
        </Typography>
        
        <br />
        <Typography
          variant='h1'
          fontWeight='bold'
          fontSize='clamp(1rem, 16vw, 4rem)'
          style={{
            background: '-webkit-linear-gradient(#e8edff, #ede8ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'text-gradient 5s ease infinite'
          }}
        >
        Welcome, Mathias
        </Typography>
        
      </Box>
      <Box
        display='grid'
        justifyContent='center'
        marginBottom= '2rem'
      >
        <Typography
          variant='h1'
          fontWeight='bold'
          fontSize='clamp(1.5rem, 6vw, 3rem)'
          style={{
            background: '-webkit-linear-gradient(#e8edff, #ede8ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'text-gradient 5s ease infinite'
          }}
        >
          UNDER CONSTRUCTION 
        </Typography>
        <Box 
          display='flex'
          justifyContent='center'
          marginTop='1rem'
        >
          <EngineeringOutlinedIcon 
            style={{
              color: '#e8edff',
              fontSize: 'clamp(5rem, 20vw, 15rem)',
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default index
