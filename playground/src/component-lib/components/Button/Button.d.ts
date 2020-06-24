import React from 'react';
import { ButtonProps } from "@material-ui/core/Button";
import { ColorOption } from '../../types/theme';
declare type Props = {
    isLoading?: boolean;
    tooltip?: React.ReactNode;
    disabledTooltip?: React.ReactNode;
    color?: ColorOption;
} & Omit<ButtonProps, "color">;
declare const Button: React.FC<Props>;
export default Button;
