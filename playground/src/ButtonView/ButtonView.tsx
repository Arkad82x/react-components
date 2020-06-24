import React, { useState } from 'react'

import { Button } from '../component-lib'
import SendIcon from '@material-ui/icons/Send'
import { ThemeProvider, Checkbox, TextField } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'
import { ColorOption } from '../component-lib/types/theme'

import { Grid, RadioGroup, FormControlLabel, Radio } from '@material-ui/core'

const temp = createMuiTheme()
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#33be3e"
        },
        success: {
            main: "#079807"
        },
        custom: temp.palette.augmentColor({
            main: "#FF0000"
        }),
        foobar: temp.palette.augmentColor({
            main: "#FF6600"
        })
    }
})

const ButtonView: React.FC<{}> = () => {
    const [color, setColor] = useState<ColorOption>("primary")
    const [text, setText] = useState<string>("Test Text")
    const [variant, setVariant] = useState<"contained" | "outlined" | "text">("contained")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isDisabled, setIsDisabled] = useState<boolean>(false)
    const [tooltip, setTooltip] = useState<string>("Tooltip demo")
    const [disabledTooltip, setDisabledTooltip] = useState<string>("Disabled tooltip demo")

    return (
        <>
            <ThemeProvider theme={theme}>
                <Grid container direction="row">
                    <Grid item lg={6}>
                        <h3> Text </h3>
                        <TextField label="standard tooltip" value={text} onChange={(e: any) => setText(e.target.value)} />

                        <h3>Theming</h3>
                        <Button variant="contained" color="primary" onClick={() => setColor("primary")}>Primary</Button>
                        <Button variant="contained" color="secondary" onClick={() => setColor("secondary")}>Secondary</Button>
                        <Button variant="contained" color="success" onClick={() => setColor("success")}>Success</Button>
                        <Button variant="contained" color="custom" onClick={() => setColor("custom")}>custom</Button>
                        <Button variant="contained" color="foobar" onClick={() => setColor("foobar")}>Foobar</Button>

                        <h3>Variante</h3>
                        <RadioGroup aria-label="gender" name="gender1" value={variant} onChange={(e: any) => setVariant(e.target.value)}>
                            <Grid container direction="row">
                                <FormControlLabel value="text" control={<Radio />} label="Text" />
                                <FormControlLabel value="outlined" control={<Radio />} label="Outlined" />
                                <FormControlLabel value="contained" control={<Radio />} label="Contained" />
                            </Grid>
                        </RadioGroup>
                        <h3> State</h3>
                        <FormControlLabel
                            control={<Checkbox color={"primary"} checked={isLoading} onChange={(e: any) => setIsLoading(e.target.checked)} />}
                            label={"Is Loading"}
                        />
                        <FormControlLabel
                            control={<Checkbox color={"primary"} checked={isDisabled} onChange={(e: any) => setIsDisabled(e.target.checked)} />}
                            label={"Is Disabled"}
                        />
                        <h3> Tooltips </h3>
                        <Grid container direction="column" spacing={2}>
                            <Grid item>
                                <TextField label="standard tooltip" value={tooltip} onChange={(e: any) => setTooltip(e.target.value)} />
                            </Grid>
                            <Grid item>
                                <TextField label="disabled tooltip" value={disabledTooltip} onChange={(e: any) => setDisabledTooltip(e.target.value)} />
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item lg={6}>
                        <Button
                            color={color}
                            variant={variant}
                            startIcon={<SendIcon />}
                            isLoading={isLoading}
                            disabled={isDisabled}
                            tooltip={tooltip}
                            disabledTooltip={disabledTooltip}
                        > {text}</Button>

                    </Grid>


                </Grid>

            </ThemeProvider>
        </>
    )
}

export default ButtonView