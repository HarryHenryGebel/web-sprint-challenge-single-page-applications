import React, { useState } from 'react';
import { Button,
         FormControl,
         InputLabel,
         MenuItem,
         Paper,
         Select,
         Typography} from '@material-ui/core';

const defaultPizza = {
  size: "Small"
};

export default function Pizza () {
  const [formValue, setFormValue] = useState(defaultPizza);

  function handleChange (event) {
    setFormValue({...formValue, size:event.target.value});
  }

  return (
    <Paper style={{height: "100vh"}}>
      <form>
      <Typography variant="h3">Build Your Own Pizza!</Typography>
        <FormControl>
          <InputLabel id="size-select-label">Size</InputLabel>
          <Select
            labelId="size-select-label"
            id="size-select"
            value={formValue.size}
            onChange={handleChange}>
            <MenuItem value={"Small"}>Small</MenuItem>
            <MenuItem value={"Medium"}>Medium</MenuItem>
            <MenuItem value={"Large"}>Large</MenuItem>
          </Select>
        </FormControl>
      </form>
    </Paper>
  );
}
