import { Box } from '@mui/material'
import React from 'react'
import Input from './Input'
import Search from './Search'

const Form = ({handleSubmit, city, setCity, error, loading}) => {
  return (
    <Box
        sx={{ display: "grid", gap: 3, mt:10}}
        component="form"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Input city={city} setCity={setCity} error={error} />
        <Search loading={loading} />
      </Box>
  )
}

export default Form