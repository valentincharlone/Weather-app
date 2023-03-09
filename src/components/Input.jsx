import { TextField } from '@mui/material'
import React from 'react'

const Input = ({city, setCity, error}) => {
  return (
    <>
    <TextField
          sx={{ fontWeight: 'bold', pt:1, pb:1 }}
          id="city"
          label="Ciudad"
          InputLabelProps={{
            style: {
                color: 'white', 
                fontWeight: 'bold'
            }
        }}
          variant='outlined'
          size="small"
          required
          fullWidth
          value={city}
          onChange={(e) => setCity(e.target.value)}
          error={error.error}
          helperText={error.message}
          InputProps={{
            style: {
                fontSize: '1.3rem',
                color: 'white',
                fontWeight: 'bolder'
            }
        }}
    />
    </>
  )
}

export default Input