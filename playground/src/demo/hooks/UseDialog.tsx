import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core'
import { useDialog, DialogProvider, Button, DialogExtraProps } from '../../component-lib'

type DialogResponse = {
    reason: "clickOutside" | undefined,
    action: "reload" | undefined,
    payload: any 
} | undefined

type MyDialogProps = {
    sampleText: string
}

const MyDialog: React.FC<MyDialogProps & DialogExtraProps<DialogResponse>> = ({ open, onClose, onCancel, sampleText }) => {

    const handleClose = () => {
        onClose()
    }

    const handleCancel = () => {
        onCancel()
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Example Title</DialogTitle>
            <DialogContent>
                <DialogContentText>{ sampleText }</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCancel}>Cancel</Button>
                <Button onClick={handleClose}>Submit</Button>
            </DialogActions>
        </Dialog>
    )
}

const UseDialog = () => {
    const { dialog } = useDialog<DialogResponse>()

    const handleClick = () => {
        dialog.show<MyDialogProps>({
            component: MyDialog,
            props: {
                sampleText: "foobar"
            }
        }).then((response: DialogResponse) => {
            console.log("then: ", { response })
        }).catch((response: DialogResponse) => {
            console.log("catch: ", { response })
        })
    }

    return (
        <Button variant="contained" onClick={handleClick}>
            Open Dialog
        </Button>
    )
}

const Wrapper = () => {
    return (
        <DialogProvider<DialogResponse>>
            <UseDialog></UseDialog>
        </DialogProvider>
    )
}

export default Wrapper 