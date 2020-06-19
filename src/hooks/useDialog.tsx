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
        open: boolean,
        resolve: (response:any) => void,
        reject: (error: any) => void
    }>({
        component: () => null,
        props: {},
        open: false,
        resolve: () => {},
        reject: () => {} 
    })

    const openDialog = (dialog: React.FC<any>, props: {}): Promise<any> => {
        return new Promise((resolve, reject) => {
            setState({
                component: dialog,
                props,
                open:true,
                resolve,
                reject
            })
        })
    }

    const onClose = (response: any) => {
        state.resolve(response)
        setState({ ...state, open: false, resolve: () => {}, reject: () => {} })
    }

    const onError = (error: any) => {
        state.reject(error)
        setState({ ...state, open: false, resolve: () => {}, reject: () => {} })
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