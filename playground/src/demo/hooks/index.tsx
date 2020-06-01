import React from 'react'
import { Tabs, Tab, AppBar } from '@material-ui/core'
import TabPanel from '../../TabPanel'
import UseAlert from './UseAlert';

export default () => {
    const [currentTab, setCurrentTab] = React.useState(0)
    return (
        <>
            <Tabs value={currentTab} onChange={(e, newValue) => setCurrentTab(newValue)}>
                <Tab label="Alert" />
            </Tabs>
            <TabPanel value={currentTab} index={0}>
                <UseAlert />
            </TabPanel>
        </>
    )
}