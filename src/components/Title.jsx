import { Typography } from '@mui/material'
import React from 'react'

const Title = () => {
  return (
    <>
        <Typography 
            sx={{fontSize : '3rem', fontWeight: 'bolder'}}
            variant="h3" 
            component="h1" 
            align="center" 
            gutterBottom 
            
        >
            WEATHER APP
        </Typography>
    </>
  )
}

export default Title