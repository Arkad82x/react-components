import React from 'react'
import { AlertProvider, Button, useAlert } from '../../component-lib'

const UseAlert = () => {
    const { alertSuccess, alertError, alertWarning, alertInfo } = useAlert()

    return (
        <>
        <Button variant="contained" onClick={() => alertSuccess("Hallo ihr da dies ist ein test")}>
           Success 
        </Button>
        <Button variant="contained" onClick={() => alertError("Hallo ihr da dies ist ein test")}>
            Error
        </Button>
        <Button variant="contained" onClick={() => alertWarning("Hallo ihr da dies ist ein test")}>
            Warning
        </Button>
        <Button variant="contained" onClick={() => alertInfo("Hallo ihr da dies ist ein test")}>
            Info
        </Button>
        </>
    )
}

const Wrapper = () => {
    return (
        <AlertProvider>
            <UseAlert></UseAlert>
        </AlertProvider>
    )
}

export default Wrapper 