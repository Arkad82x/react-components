import React from 'react';
import logo from './logo.svg';
import './App.css';

import SendIcon from '@material-ui/icons/Send'

import { Button } from './component-lib'

function App() {
  return (
    <div className="App">
      <h3> Test Component Render below </h3>
      <Button variant="contained" color="primary" startIcon={<SendIcon />}> Some random text </Button>
    </div>
  );
}

export default App;
