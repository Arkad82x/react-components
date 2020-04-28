import React from 'react';
import MuiButton, { ButtonProps } from "@material-ui/core/Button";
import CircularProgress from '@material-ui/core/CircularProgress'
import { useTheme } from '@material-ui/core';
import Tooltip from './Tooltip';

type Props = {
    isLoading?: boolean,
    tooltip?: React.ReactNode,
    disabledTooltip?: React.ReactNode
} & ButtonProps

const Button:React.FC<Props> = React.forwardRef(({ color, children, isLoading, disabled, startIcon, tooltip, disabledTooltip, ...props }, ref) => {
    const { palette } = useTheme()

    const ButtonElement = <MuiButton
            color={color}
            startIcon={
                isLoading ?
                <CircularProgress size={20} style={{color: color && palette[color].contrastText}}/>
                : startIcon}
            disabled={isLoading || disabled}
            ref={ref}
            {...props}
        >
            { children }
        </MuiButton>



    if(tooltip && disabled === false) {
        return (
            <Tooltip enterDelay={500} title={tooltip} arrow>
                { ButtonElement }
            </Tooltip>
        )
    }
    if(disabledTooltip && disabled === true) {
        //wrapper needed because disabled buttons do not fire userinteraction events
        return (
            <Tooltip title={disabledTooltip} arrow>
                <div style={{display:"unset"}}>
                    { ButtonElement }
                </div>
            </Tooltip>
        )
    }else {
        return ButtonElement
    }
})

Button.defaultProps = {
    isLoading: false,
    disabled: false
}

export default Button