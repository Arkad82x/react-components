import React, { useState, useContext } from 'react'
import { IconButton, Snackbar, SnackbarProps } from '@material-ui/core'
import MuiAlert, { AlertProps as MuiAlertProps } from '@material-ui/lab/Alert'
import CloseIcon from '@material-ui/icons/Close' 


type ContextProps = {
    state: {
        open: boolean,
        currentAlert: {
            props: AlertProps,
            content: React.ReactNode | string
        }
    },
    onClose: () => void,
    setAlert: (content: React.ReactNode | string, severity: Pick<MuiAlertProps, "severity">) => void,
    snackbarProps?: Exclude<SnackbarProps, "onClose" | "open">,
    alertProps?: Exclude<MuiAlertProps, "severity" | "color">
}

const AlertContext = React.createContext<ContextProps>({
    state: {
        open: false,
        currentAlert: {
            props: {},
            content: null
        }
    },
    setAlert: (content, severity) => {},
    onClose: () => { },
    snackbarProps: {},
    alertProps: {} 
})

type ProviderProps = {
    alertProps?: Exclude<MuiAlertProps, "severity" | "color">,
    snackbarProps?: Exclude<SnackbarProps, "onClose" | "open">,
    children: React.ReactNode
}

export const AlertProvider: React.FC<ProviderProps> = ({ alertProps, snackbarProps, children }) => {
    const [ open, setOpen ] = useState<boolean>(false)
    const [ currentAlert, setCurrentAlert ] = useState<{
        props: MuiAlertProps,
        content: React.ReactNode | string
    }>({ props: {}, content: null})

    const handleClose = () => {
        setOpen(false)
    }

    const setAlert = ( content: React.ReactNode | string, props: MuiAlertProps ) => {
        if(open === false) {
            setCurrentAlert({content, props})
            setOpen(true)
        }
    }

    return (
        <AlertContext.Provider value={{ state: { open, currentAlert }, setAlert, onClose: handleClose, snackbarProps, alertProps }} >
            {children}
            <Alert />
        </AlertContext.Provider>

    )
}

type AlertProps = {
}

const Alert: React.FC<AlertProps> = () => {
    const { state, onClose, snackbarProps, alertProps } = useContext(AlertContext)

    return (
        <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            autoHideDuration={2000}
            {...snackbarProps}
            onClose={onClose}
            open={state.open} >
            <MuiAlert {...alertProps} {...state.currentAlert.props} action={
                <IconButton size="small" aria-label="close" color="inherit" onClick={onClose}>
                    <CloseIcon fontSize="small" />
                </IconButton>
            }>
                { state.currentAlert.content}
            </MuiAlert>
        </Snackbar>

    )
}

export const useAlert = () => {
    const { setAlert } = React.useContext(AlertContext)

    const alertSuccess = (content: React.ReactNode | string, props?: MuiAlertProps) => {
        setAlert(content, { ...props, severity: "success" })
    }

    const alertError = (content: React.ReactNode | string, props?: MuiAlertProps) => {
        setAlert(content, { ...props, severity: "error" })
    }

    const alertWarning = (content: React.ReactNode | string, props?: MuiAlertProps) => {
        setAlert(content, { ...props, severity: "warning" })
    }

    const alertInfo = (content: React.ReactNode | string, props?: MuiAlertProps) => {
        setAlert(content, { ...props, severity: "info" })
    }

    return {
        alert: {
            success: alertSuccess,
            error: alertError,
            warning: alertWarning,
            info: alertInfo
        }
    }
}
