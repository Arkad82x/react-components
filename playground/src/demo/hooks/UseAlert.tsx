import React from 'react'
import { AlertProvider, Button, useAlert } from '../../component-lib'

const UseAlert = () => {
    const {showAlert} = useAlert()

    return (
        <>
        <Button variant="contained" onClick={() => showAlert.success("Hallo ihr da dies ist ein test")}>
           Success 
        </Button>
        <Button variant="contained" onClick={() => showAlert.error("Hallo ihr da dies ist ein test")}>
            Error
        </Button>
        <Button variant="contained" onClick={() => showAlert.warning("Hallo ihr da dies ist ein test")}>
            Warning
        </Button>
        <Button variant="contained" onClick={() => showAlert.info("Hallo ihr da dies ist ein test")}>
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