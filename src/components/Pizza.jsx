import React, { useState, useEffect } from 'react';
import { Button,
         Checkbox,
         Divider,
         FormControl,
         FormControlLabel,
         FormGroup,
         FormHelperText,
         FormLabel,
         Input,
         InputLabel,
         MenuItem,
         Paper,
         Select,
         Typography} from '@material-ui/core';
import * as yup from 'yup';

const defaultPizza = {
  name: "",
  size: "Small",
  pepperoni: false,
  sausage: false,
  beef: false,
  bacon: false,
  requests: ""
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

  function handleCheck (field, value) {
    setFormValue({...formValue, [field]: value});
  }

  function handleText (field, value) {
    setFormValue({...formValue, [field]: value});
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
          <Input id="name-text"
                 value={formValue.name}
                 onChange={(event) => handleText('name', event.target.value)} />
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
        <Divider orientation='vertical' flexItem />
        <FormControl component="fieldset">
          <FormLabel>How about some toppings</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={formValue.pepperoni}
                                 onChange={
                                   (event) => handleCheck(
                                     "pepperoni", event.target.checked)}
                                 name="pepperoni" />}
              label="Pepperoni"
            />
            <FormControlLabel
              control={<Checkbox checked={formValue.sausage}
                                  onChange={
                                    (event) => handleCheck(
                                      "sausage", event.target.checked)}
                                  name="sausage" />}
              label="Sausage"
            />
            <FormControlLabel
              control={<Checkbox checked={formValue.beef}
                                 onChange={
                                   (event) => handleCheck(
                                     "beef", event.target.checked)}
                                 name="beef" />}
              label="Beef"
            />
            <FormControlLabel
              control={<Checkbox checked={formValue.bacon}
                                  onChange={
                                    (event) => handleCheck(
                                      "bacon", event.target.checked)}
                                  name="bacon" />}
              label="Bacon"
            />
          </FormGroup>
          <FormHelperText>
            For plain, just don't check anything!'
          </FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="requests-text">
            Special Requests:
          </InputLabel>
          <Input id="requests-text"
                 value={formValue.requests}
                 onChange={
                   (event) => handleText('requests', event.target.value)} />
        </FormControl>
      </form>
    </Paper>
  );
}

//  LocalWords:  fieldset
