import React, { useState } from 'react';
import { AppBar,
         IconButton,
         Toolbar,
         Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/AddCircleOutlineOutlined';

export default function Topbar (props) {
  return(
    <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h6">
              Lambda Eats
            </Typography>
          </Toolbar>
    </AppBar>
  );
}

//  LocalWords:  AddCircleOutlineOutlined EntryDialog
