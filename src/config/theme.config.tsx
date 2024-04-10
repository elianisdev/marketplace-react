import React from "react";
import {createTheme, ThemeProvider, CssBaseline} from "@mui/material";


type ThemeProp = {
children: JSX.Element
};

export enum themePalette {
   background = "#12181b",
   Lime = "#C8FA5F",
    Font_Global = "'Roboto', sans-serif",
   //Alerts Style
    ERROR_MAIN = "#920c0c",
    BG_ERROR_MAIN = "rgba(244, 67, 54, 0.1)",
    SUCCESS_MAIN = "#1b5e20",
    BG_SUCCESS_MAIN = "rgba(3,245,12,0.1)",

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
        MuiAlert: {
            defaultProps: {
                style: {
                    borderRadius: "0.8rem",
                    fontSize: "1rem",
                }
            },
            styleOverrides: {
                standardError: {
                    backgroundColor: themePalette.BG_ERROR_MAIN,
                    border: `1px solid ${themePalette.ERROR_MAIN}`,
                },
                standardSuccess: {
                    backgroundColor: themePalette.BG_SUCCESS_MAIN,
                    border: `1px solid ${themePalette.SUCCESS_MAIN}`,
                }
            }
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