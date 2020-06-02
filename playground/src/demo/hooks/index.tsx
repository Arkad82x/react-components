import React from 'react'
import { Grid, Paper, Typography, makeStyles } from '@material-ui/core'
import TabPanel from '../../TabPanel'
import UseAlert from './UseAlert';
import UseDialog from './UseDialog'

const useStyles = makeStyles(() => ({
    paper: {
        padding: "16px"
    }
}))

export default () => {
    const [currentTab, setCurrentTab] = React.useState(0)
    const classes = useStyles()
    return (
        <Grid container direction="column" spacing={4}>
            <Grid item>

            <Paper className={classes.paper}>
                <Typography variant="h4">Alerts</Typography>
                <UseAlert />
            </Paper>
            </Grid>
            <Grid item>

            <Paper className={classes.paper}>
                <Typography variant="h4">Dialogs</Typography>
                <UseDialog />
            </Paper>
            </Grid>
        </Grid>
    )
}