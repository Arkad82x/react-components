import React, { useState } from 'react'

export type DialogProps = {
    open: boolean,
    onClose: () => void,
    onError: () => void
}

const DialogContext = React.createContext({
    openDialog: (dialog: React.FC<any>, props: {}) => Promise.resolve()
})

export const DialogProvider: React.FC<{}> = ({ children }) => {
    const [ state, setState ] = useState<{
        component: React.FC<any>,
        props: {},
        open: boolean
    }>({
        component: () => null,
        props: {},
        open: false
    })

    const [ dialogCallbacks, setDialogCallbacks ] = useState<{resolve:(response:any) => void, reject: (error:any) => void}>({resolve: (response:any) => {}, reject: (error:any) => {}})

    const openDialog = (dialog: React.FC<any>, props: {}): Promise<any> => {
        const promise = new Promise((resolve, reject) => {
            setDialogCallbacks({ resolve, reject })
        })

        setState({
            component: dialog,
            props,
            open:true
        })
        return promise
    }

    const onClose = (response: any) => {
        dialogCallbacks.resolve(response)
        setState({ ...state, open: false })
    }

    const onError = (error: any) => {
        dialogCallbacks.reject(error)
        setState({ ...state, open: false })
    }

    const DialogComponent = state.component

    return (
        <DialogContext.Provider value={{openDialog}} >
            {children}
            {state.component && <DialogComponent {...state.props} open={state.open} onClose={onClose} onError={onError} />}
        </DialogContext.Provider>
    )
}

export const useDialog = () => {
    const { openDialog } = React.useContext(DialogContext)

    const show = <P extends any>({component, props}: {component: React.FC<any>, props: P}): Promise<any> => {
        return openDialog(component, props)
    }

    return {
        dialog: {
            show 
        }
    }
}

export const useModal = useDialog
