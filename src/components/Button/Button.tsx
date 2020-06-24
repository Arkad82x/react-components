import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import MuiButton, { ButtonProps } from "@material-ui/core/Button";
import CircularProgress from '@material-ui/core/CircularProgress'
import { useTheme } from '@material-ui/core';
import Tooltip from './Tooltip';

import { ColorOption } from '../../types/theme'


type Props = {
    isLoading?: boolean,
    tooltip?: React.ReactNode,
    disabledTooltip?: React.ReactNode,
    color?: ColorOption
} & Omit<ButtonProps, "color">


const useStyles = makeStyles(({ palette }) => ({
    root: ({ color, variant }: { color: ColorOption, variant?: "text" | "contained" | "outlined" }) =>
        (variant === 'contained' ? {
            color: palette[color].contrastText,
            backgroundColor: palette[color].main,
            border: "none",
            "&:hover": {
                backgroundColor: palette[color].dark,
                color: palette[color].contrastText,
                border: "none",
                // Reset on touch devices, it doesn't add specificity
                "@media (hover: none)": {
                    backgroundColor: palette[color].main
                }
            }
        } : variant === 'text' ? {
                color: palette[color].main,
                backgroundColor: "#ffffff",
                border: "none",
                "&:hover": {
                    backgroundColor: "#ffffff",
                    color: palette[color].dark,
                    border: "none",
                    "@media (hover: none)": {
                        color: palette[color].main
                    }
                }
            } : {
                color: palette[color].main,
                backgroundColor: "#ffffff",
                border: `1px solid ${palette[color].main}`,
                "&:hover": {
                    color: palette[color].dark,
                    backgroundColor: '#ffffff',
                    border: `1px solid ${palette[color].dark}`,
                    "@media (hover: none)": {
                        color: palette[color].main
                    }
                }
            })
}))

const Button: React.FC<Props> = React.forwardRef(({ color="primary", children, isLoading = false, disabled = false, startIcon = null, tooltip = null, disabledTooltip = null, variant, ...props }, ref) => {
    const { palette } = useTheme()
    const classes = useStyles({ color, variant })

    const ButtonElement = <MuiButton
        classes={classes}
        variant={variant}
        startIcon={
            isLoading ?
                <CircularProgress size={20} style={{ color: color && palette[color].main }} />
                : startIcon}
        disabled={isLoading || disabled}
        ref={ref}
        {...props}
    >
        {children}
    </MuiButton>



    if (tooltip && disabled === false) {
        return (
            <Tooltip enterDelay={500} title={tooltip} arrow>
                {ButtonElement}
            </Tooltip>
        )
    }
    if (disabledTooltip && disabled === true) {
        //wrapper needed because disabled buttons do not fire userinteraction events
        return (
            <Tooltip title={disabledTooltip} arrow>
                <div style={{ display: "unset" }}>
                    {ButtonElement}
                </div>
            </Tooltip>
        )
    } else {
        return ButtonElement
    }
})

Button.defaultProps = {
    isLoading: false,
    disabled: false
}

export default Button