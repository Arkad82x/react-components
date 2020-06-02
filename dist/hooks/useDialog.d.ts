import React from 'react';
declare type ProviderProps = {
    children: React.ReactNode;
};
export declare type DialogExtraProps<DialogResponse> = {
    open: boolean;
    onClose: (response?: DialogResponse) => void;
    onCancel: (response?: DialogResponse) => void;
};
export declare function DialogProvider<DialogResponse>(props: ProviderProps): JSX.Element;
export declare const useDialog: <DialogResponse extends any>() => {
    dialog: {
        show: <P extends any>({ component, props }: {
            component: React.FC<P & DialogExtraProps<DialogResponse>>;
            props: P;
        }) => Promise<any>;
    };
};
export {};
