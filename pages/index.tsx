import Head from 'next/head';
import Image from 'next/image';
import {Inter} from 'next/font/google';
import favicon from '@/assets/favicon.ico';
import {Button} from "@mui/material";

const inter = Inter({subsets: ['latin']});

export default function Home()
{
    return (
        <>
            <Head>
                <title>Who Am I?</title>
                <meta name="description" content="Who Am I? by Mihai Anghelin"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href={"favicon.ico"}/>
            </Head>

            <main>
                <h1>Who Am I?</h1>

                <Button
                    variant="contained"
                >
                    Create new lobby
                </Button>
            </main>
        </>
    );
}
