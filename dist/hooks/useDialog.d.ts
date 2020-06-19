import React from 'react';
export declare type DialogProps = {
    open: boolean;
    onClose: () => void;
    onError: () => void;
};
export declare const DialogProvider: React.FC<{}>;
export declare const useDialog: () => {
    dialog: {
        show: <P extends any>({ component, props }: {
            component: React.FC<any>;
            props: P;
        }) => Promise<any>;
    };
};
