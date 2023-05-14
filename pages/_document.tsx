import {Html, Head, Main, NextScript} from 'next/document';
import React from "react";

export default function Document()
{
    return (
        <Html lang="en">
            <Head>
                <title>Who Am I? by Mihai Anghelin</title>
                <meta name="description" content="Who Am I? by Mihai Anghelin"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href={"favicon.ico"}/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}
