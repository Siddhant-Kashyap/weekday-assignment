import TextField from '@mui/material/TextField';

const Search = () => {
  return (
    <TextField
    id="search-box"
    label="Search Company Name"
    variant="outlined"
    //onChange={(event) => onChange(event.target.value)}
  />
  )
}

export default Search