import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const OtherFilterBox = ({options,label,multi}) => {
  return (
    <Autocomplete
    multiple={multi}
    id="tags-standard"
    disablePortal
    options={options}
    onChange={(event, value) => console.log(value)} // Handle the change event
    renderInput={(params) => <TextField {...params} label={label} />}
    sx={{ minWidth: '200px' }}
  />
  )
}

export default OtherFilterBox