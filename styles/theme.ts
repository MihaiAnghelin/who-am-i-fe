import {createTheme} from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#674188",
        },
        secondary: {
            main: "#C3ACD0",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    maxWidth: "500px",
                    width: "100%",
                },
                contained: {
                    maxWidth: "500px",
                    width: "100%",
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    width: "100%",
                    maxWidth: "500px",
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    backgroundColor: "#C3ACD0",
                },
            },
        },

        MuiAccordion: {
            styleOverrides: {
                root: {
                    backgroundColor: "#C3ACD0",
                    //rounded corners
                    borderRadius: "0.75rem !important",

                },
            },
        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    width: "100%",
                    maxWidth: "500px",
                },
            },
        },
    },
});