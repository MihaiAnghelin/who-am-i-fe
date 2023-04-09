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
                root: {},
                contained: {
                    // backgroundColor: "#674188",
                    backgroundColor: "#674188",
                    color: "#fff",
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
    },
});