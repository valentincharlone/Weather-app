import { LoadingButton } from '@mui/lab'
import React from 'react'

const Search = ({loading}) => {
  return (
    <>
        <LoadingButton
          type="submit"
          variant="contained"
          loading={loading}
          loadingIndicator="Buscando..."
        >
          Buscar
        </LoadingButton>
    </>
  )
}

export default Search