import * as createPalette from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createPalette' {
    interface PaletteOptions {    
        custom?: PaletteColorOptions;
        foobar?: PaletteColorOptions;
    }

    interface Palette {
        custom: PaletteColor;
        foobar: PaletteColor;
    }

}