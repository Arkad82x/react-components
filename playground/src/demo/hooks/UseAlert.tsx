import React from 'react'
import { AlertProvider, Button, useAlert } from '../../component-lib'

const UseAlert = () => {
    const { alert } = useAlert()

    return (
        <>
        <Button variant="contained" onClick={() => alert.success("Hallo ihr da dies ist ein test")}>
           Success 
        </Button>
        <Button variant="contained" onClick={() => alert.error("Hallo ihr da dies ist ein test")}>
            Error
        </Button>
        <Button variant="contained" onClick={() => alert.warning("Hallo ihr da dies ist ein test")}>
            Warning
        </Button>
        <Button variant="contained" onClick={() => alert.info("Hallo ihr da dies ist ein test")}>
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