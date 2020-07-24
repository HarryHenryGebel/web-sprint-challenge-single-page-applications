import React, { useState } from 'react';
import {Route, Router, Link} from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Button, FormControl, Paper } from '@material-ui/core';
import './App.css';
import 'fontsource-roboto';

import Topbar from './components/Topbar';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

export default function App () {
  return (
      <ThemeProvider theme={darkTheme}>
        <Route exact path="/">
          <Paper style={{height: "100vh"}}>
            <Topbar/>
            <Link to="/pizza">
              <Button variant="contained">Order a Pizza!</Button>
            </Link>
          </Paper>
        </Route>
        <Route path="/pizza">
          <Paper style={{height: "100vh"}}>
          </Paper>
        </Route>
      </ThemeProvider>
  );
};

//  LocalWords:  roboto Topbar
