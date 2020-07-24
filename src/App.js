import React, { useState } from 'react';
import {Route, Router} from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
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
