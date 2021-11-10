import { } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        base: Palette['primary'];
        sub: Palette['primary'];
        back: Palette['primary'];
    }
    interface PaletteOptions {
        base?: PaletteOptions['primary'];
        sub?: PaltteOptions['primary'];
        back?: PaletteOptions['primary'];
    }
    interface PaletteColor {
        main: string;
        second?: string;
    }
    interface SimplePaletteColorOptions {
        main: string;
        second?: string;
    }
}