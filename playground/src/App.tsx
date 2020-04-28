import React from 'react';
import { AppBar, Toolbar, Typography, Paper } from '@material-ui/core';

import ButtonView from './ButtonView/ButtonView'

function App() {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">
            Components
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper style={{padding:"16px"}}>
        <ButtonView></ButtonView>
      </Paper>
      </>
  );
}

export default App;
