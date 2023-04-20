import Head from 'next/head';
import Image from 'next/image';
import {Inter} from 'next/font/google';
import favicon from '@/assets/favicon.ico';
import {Button} from "@mui/material";
import logo from "@/assets/images/logo96.png";

const inter = Inter({subsets: ['latin']});

export default function Home()
{
    return (
        <>
            <main>

                <div className="flex justify-center flex-col content-center items-center pt-16">
                    <Image
                        src={logo}
                        alt="Who Am I?"
                        width={96}
                        height={96}
                    />

                    <h1>Who Am I?</h1>

                    <Button
                        variant="contained"
                        color="secondary"
                    >
                        Create new lobby
                    </Button>
                </div>

            </main>
        </>
    );
}
