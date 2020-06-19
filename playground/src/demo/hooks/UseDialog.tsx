import React from 'react'
import { Button } from '../../component-lib'
import { useDialog, DialogProvider } from './dummy'
import MyDialog, { Response as DialogResponse, Props as DialogProps } from './MyDialog'

const UseDialog = () => {
    const { dialog } = useDialog()

    const handleClick = () => {
        dialog.show<DialogProps>({
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
        <DialogProvider>
            <UseDialog></UseDialog>
        </DialogProvider>
    )
}

export default Wrapper 