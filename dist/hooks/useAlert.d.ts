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
    alertSuccess: (content: React.ReactNode, props?: MuiAlertProps | undefined) => void;
    alertError: (content: React.ReactNode, props?: MuiAlertProps | undefined) => void;
    alertWarning: (content: React.ReactNode, props?: MuiAlertProps | undefined) => void;
    alertInfo: (content: React.ReactNode, props?: MuiAlertProps | undefined) => void;
};
export default useAlert;
