import '@/styles/globals.scss';
import type {AppProps} from 'next/app';
import {Quicksand} from 'next/font/google';
import React from "react";
import Layout from "@/components/layouts/Layout";
import {dehydrate, Hydrate, QueryClient, QueryClientProvider} from "react-query";
import {ThemeProvider} from "@mui/system";
import {theme} from "@/styles/theme";
import {StyledEngineProvider} from "@mui/material";

const quicksand = Quicksand({subsets: ['latin']});

export default function App({Component, pageProps}: AppProps)
{
    const queryClient = new QueryClient();
    const dehydratedState = dehydrate(queryClient);

    return (
        <ThemeProvider theme={theme}>
            <StyledEngineProvider injectFirst>
                <QueryClientProvider client={queryClient}>
                    <Hydrate state={dehydratedState}>
                        <main className={quicksand.className}>
                            <Layout>
                                <Component {...pageProps} />
                            </Layout>
                        </main>
                    </Hydrate>
                </QueryClientProvider>
            </StyledEngineProvider>
        </ThemeProvider>
    );
}
