import React from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
const Search = ({query,handleFilter}) => {
  return (
    <>
    <TextField id="outlined-basic" label="Search Here" variant="outlined" 
          InputProps={{
            startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
          }}
          value={query}
                     onInput={(e) => handleFilter(e)}
        />
    </>
  )
}

export default Search