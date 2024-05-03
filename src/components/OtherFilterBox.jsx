import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { addFilter, removeFilter } from "./Redux/reducers/filterSlice";

const OtherFilterBox = ({ options, label, multi }) => {
  const dispatch = useDispatch();

  const handleFilterChange = (event, value) => {
    if (multi) {
      dispatch(addFilter({ [label]: value }));
    } else {
      dispatch(addFilter({ [label]: value ? [value] : [] }));
    }
  };

  return (
    <Autocomplete
      multiple={multi}
      id={`tags-${label}`}
      disablePortal
      options={options}
      onChange={handleFilterChange}
      renderInput={(params) => <TextField {...params} label={label} />}
      sx={{ minWidth: "200px" }}
    />
  );
};

export default OtherFilterBox;
