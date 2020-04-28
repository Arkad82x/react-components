import React from 'react';
import { ButtonProps } from "@material-ui/core/Button";
declare type Props = {
    isLoading?: boolean;
    tooltip?: React.ReactNode;
    disabledTooltip?: React.ReactNode;
} & ButtonProps;
declare const Button: React.FC<Props>;
export default Button;
