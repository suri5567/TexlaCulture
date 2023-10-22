import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect() {
  const [service, setService] = React.useState("All"); // Set the default value to 10 for "All"

  const handleChange = (event) => {
    setService(event.target.value);
  };

  return (
    <Box sx={{ width: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{ marginBottom: 20 }}>
          Service type
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={service}
          label="All"
          onChange={handleChange}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="No">No</MenuItem>
          <MenuItem value="Yes">Yes</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
