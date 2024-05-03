import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";

import { addFilter, removeFilter } from "./Redux/reducers/filterSlice";
import { useEffect, useState } from "react";

const FilterBox = ({ roles }) => {
  const dispatch = useDispatch();
  const [selectedOptions, setSelectedOptions] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   const handleChange = (event, value) => {
//     if (value.length === 0 || !selectedCategory) {
//       setSelectedOptions(value);
//     } else {
//       dispatch(removeFilter(selectedCategory)); 
//       setSelectedCategory(value[0].dept);
     
//       dispatch(addFilter(value[0].dept)); // Add new selected category as filter
//       setSelectedOptions([]);
//     }
//   };
useEffect(()=>{


},[dispatch])

  return (
    <Autocomplete
    multiple
    id="tags-standard"
    disablePortal
    options={roles}
    groupBy={(role) => role.dept}
    getOptionLabel={(role) => role.label}
    onChange={(event, value) => {
      setSelectedOptions(value); 
      const selectedLabels = value.map((option) => option.label);
      dispatch(addFilter(selectedLabels))
    }}
    value={selectedOptions} 
    renderInput={(params) => <TextField {...params} label="Roles" />}
    renderOption={(props, option) => (
      <li {...props}>
        {option.label}
      </li>
    )}
    filterSelectedOptions
    sx={{ minWidth: '200px' }}
  />
  
  );
};

export default FilterBox;
