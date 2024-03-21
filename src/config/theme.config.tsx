import React from "react";
import {createTheme, ThemeProvider, CssBaseline} from "@mui/material";


type ThemeProp = {
children: JSX.Element
};

export enum themePalette {
   background = "#12181b",
   Lime = "#C8FA5F",
    Font_Global = "'Roboto', sans-serif",

}
const theme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: themePalette.background,

        },
        primary: {
            main: themePalette.Lime,

        },
    },
    typography: {
        fontFamily: themePalette.Font_Global,
    },
    components: {
        MuiButton: {
           defaultProps : {
               style: {
                   textTransform: "none",
                   boxShadow: "none",
                   borderRadius: "0.5rem",

               }
        },
    },
    }
});

export const ThemeConfig: React.FC<ThemeProp>= ({children}) =>{
    // @ts-ignore
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};