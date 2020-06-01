import React from 'react';
import { AppBar, Toolbar, Typography, Paper, Tab, Tabs } from '@material-ui/core';

import ButtonView from './ButtonView/ButtonView'
import HooksView from './demo/hooks/index'
import TabPanel from './TabPanel';

function App() {
  const [currentTab, setCurrentTab] = React.useState(0)
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">
            React Tools
          </Typography>
        </Toolbar>
      </AppBar>

      <AppBar>
        <Tabs value={currentTab} onChange={(event, newValue) => setCurrentTab(newValue)}>
          <Tab label={"Components"} />
          <Tab label={"hooks"} />
        </Tabs>
      </AppBar>
      <Paper style={{ padding: "16px" }}>
        <TabPanel value={currentTab} index={0}>
          <ButtonView />
        </TabPanel>
        <TabPanel value={currentTab} index={1}>
          <HooksView />
        </TabPanel>
      </Paper>
    </>
  );
}

export default App;
