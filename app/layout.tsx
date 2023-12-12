import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {Aside} from "@/app/root-layout/aside";
import Header from "@/app/root-layout/header";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Aditya Prasoon | Home',
    description: 'Personal website of Aditya Prasoon',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
        <body className={`${inter.className} tw-bg-zinc-200 dark:tw-bg-zinc-800`}>
        <div className="tw-mx-auto tw-h-screen tw-max-w-5xl tw-border-solid tw-border-red-600 tw-border">
            <Header/>
            
            Hello
            {/*<div className="root-container tw-h-screen tw-flex tw-flex-col md:tw-flex-row">
                <div className="tw-flex-grow-[3] tw-border-2 tw-border-red-600 tw-border-solid">
                    {children}
                </div>
                <div className="sm:tw-flex-grow-0 md:tw-flex-grow tw-border-2 tw-border-green-600 tw-border-solid">
                    <Aside/>
                </div>
            </div>*/}
        </div>
        </body>
        </html>
    );
}
