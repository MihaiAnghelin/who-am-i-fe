import Head from 'next/head';
import Image from 'next/image';
import {Inter} from 'next/font/google';
import favicon from '@/assets/favicon.ico';
import {Button} from "@mui/material";
import logo from "@/assets/images/logo96.png";
import React from "react";
import Box from "~/components/general/Box";
import {useRouter} from "next/router";

const inter = Inter({subsets: ['latin']});

export default function Home()
{
    const router = useRouter();

    return (
        <>
            <main>
                <Box className="p-16">
                    <Image
                        src={logo}
                        alt="Who Am I?"
                        width={96}
                        height={96}
                    />

                    <h1>Who Am I?</h1>

                    <Button
                        variant="contained"
                        onClick={() => router.push("/user/create")}
                    >
                        Create new lobby
                    </Button>

                </Box>
            </main>
        </>
    );
}
