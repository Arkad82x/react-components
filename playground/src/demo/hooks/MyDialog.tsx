import React from 'react'
import { DialogProps } from './dummy'

import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core'

export type Props = {
    sampleText: string,
}

export type Response = {

}

const MyDialog: React.FC<Props & DialogProps> = ({ open, onClose, onError, sampleText }) => {

    const handleClose = () => {
        onClose()
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Example Title</DialogTitle>
            <DialogContent>
                <DialogContentText>{ sampleText }</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Submit</Button>
            </DialogActions>
        </Dialog>
    )
}

export default MyDialog