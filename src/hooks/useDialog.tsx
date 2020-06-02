import React, { useState } from 'react'


type ProviderProps = {
    children: React.ReactNode
}

export type DialogExtraProps<DialogResponse> = {
    open: boolean,
    onClose: ( response?: DialogResponse ) => void,
    onCancel: ( response?: DialogResponse ) => void
}

type ContextProps<DialogResponse> = {
    openDialog: <P>( DialogComponent: React.FC<P & DialogExtraProps<DialogResponse>>, props: P, successCallback: (response?: DialogResponse) => void, errorCallback: (response?: DialogResponse) => void ) => void
}

const DialogContext = React.createContext<ContextProps<any>>({
    openDialog: () => {}
})

export function DialogProvider<DialogResponse>(props: ProviderProps) {
    const { children } = props
    const [ state, setState ] = useState<{
        open: boolean,
        props: any,
        DialogComponent: React.FC<any>,
        successCallback: ( response?: DialogResponse) => void,
        errorCallback: (response?: DialogResponse) => void
    }>({
        open: false,
        props: {},
        DialogComponent: () => null,
        successCallback: () => {},
        errorCallback: () => {}
    })



    const openDialog = <P extends any>(DialogComponent: React.FC<P & DialogExtraProps<DialogResponse>>, props: P, successCallback: (response?: DialogResponse) => void, errorCallback: (response?: DialogResponse) => void): void => {
        setState({
            open: true,
            props,
            DialogComponent,
            successCallback,
            errorCallback
        })
    }

    function onClose (response?: DialogResponse){
        state.successCallback(response)
        setState({
            ...state,
            open: false
        })
    }

    const onCancel = (response?: DialogResponse) => {
        state.errorCallback(response)
        setState({
            ...state,
            open: false
        })

    }

    const DialogComponent = state.DialogComponent

    return (
        <DialogContext.Provider value={{openDialog}} >
            {children}
            <DialogComponent open={state.open} onClose={onClose} onCancel={onCancel} {...state.props}/>
        </DialogContext.Provider>
    )
}

export const useDialog = <DialogResponse extends any>() => {
    const { openDialog } = React.useContext(DialogContext)

    const show = <P extends any>({ component, props}: {component: React.FC<P & DialogExtraProps<DialogResponse>>, props: P}): Promise<any> => {
        return new Promise((res, rej) => {
            openDialog<P>(component, props, (response?) => {
                res(response)
            }, (response?) => {
                rej(response)
            })
        })
    }

    return {
        dialog: {
            show 
        }
    }
}
