import React, { useState, useEffect } from 'react';
import { Button,
         Divider,
         FormControl,
         Input,
         InputLabel,
         MenuItem,
         Paper,
         Select,
         Typography} from '@material-ui/core';
import * as yup from 'yup';

const defaultPizza = {
  name: "",
  size: "Small"
};

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .required('Required')
});

export default function Pizza () {
  const [formValue, setFormValue] = useState(defaultPizza),
        [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    validationSchema.validate(formValue, {abortEarly: false})
      .then((response) => {
        setValidationErrors({});
      })
      .catch((error) => {
        const errors = {};
        error.inner.forEach((error) => errors[error.path] = error.message);
        setValidationErrors(errors);
      });
  }, [formValue]);


  function handleName (event) {
    setFormValue({...formValue, name:event.target.value});
  }

  function handleSize (event) {
    setFormValue({...formValue, size:event.target.value});
  }

  return (
    <Paper style={{height: "100vh"}}>
      <form>
        <Typography variant="h3">Build Your Own Pizza!</Typography>
        <FormControl>
          <InputLabel htmlFor="name-text">
            {"name" in validationErrors ?
             `Name (${validationErrors.name})` :
             "Name"}
          </InputLabel>
          <Input id="name-text" value={formValue.name} onChange={handleName} />
        </FormControl>
        <Divider orientation='vertical' flexItem />
        <FormControl>
          <InputLabel id="size-select-label">Size</InputLabel>
          <Select
            labelId="size-select-label"
            id="size-select"
            value={formValue.size}
            onChange={handleSize}>
            <MenuItem value={"Small"}>Small</MenuItem>
            <MenuItem value={"Medium"}>Medium</MenuItem>
            <MenuItem value={"Large"}>Large</MenuItem>
          </Select>
        </FormControl>
      </form>
    </Paper>
  );
}
