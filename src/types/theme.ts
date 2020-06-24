import { Palette } from '@material-ui/core/styles/createPalette'

export type ColorOption = keyof Omit<Palette, "common" | "type" | "background" | "contrastThreshold" | "tonalOffset" | "grey" | "text" | "divider" | "action" | "getContrastText" | "augmentColor">
