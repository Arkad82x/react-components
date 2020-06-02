import React from 'react';
import { SnackbarProps } from '@material-ui/core';
import { AlertProps as MuiAlertProps } from '@material-ui/lab/Alert';
declare type ProviderProps = {
    alertProps?: Exclude<MuiAlertProps, "severity" | "color">;
    snackbarProps?: Exclude<SnackbarProps, "onClose" | "open">;
    children: React.ReactNode;
};
export declare const Provider: React.FC<ProviderProps>;
declare const useAlert: () => {
    showAlert: {
        success: (content: React.ReactNode, props?: MuiAlertProps | undefined) => void;
        error: (content: React.ReactNode, props?: MuiAlertProps | undefined) => void;
        warning: (content: React.ReactNode, props?: MuiAlertProps | undefined) => void;
        info: (content: React.ReactNode, props?: MuiAlertProps | undefined) => void;
    };
};
export default useAlert;
