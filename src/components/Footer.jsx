import { Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <>
    <Typography 
        textAlign="center" 
        sx={{ mt: 35, fontSize: "15px" }}
    >
        Powered by:{" "}
        <a 
            href="https://www.weatherapi.com/" 
            title="Weather API"
            className='footer'
        >
            WeatherAPI.com
        </a>
    </Typography>
    </>
  )
}

export default Footer