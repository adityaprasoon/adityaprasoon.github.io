import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {RootAside} from "@/app/root-aside/RootAside";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Aditya Prasoon | Home',
    description: 'Personal website of Aditya Prasoon',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
        <body className={`${inter.className} tw-flex tw-flex-col tw-items-center tw-bg-zinc-200`}>
        <div className="root-container tw-h-screen tw-flex tw-flex-col md:tw-flex-row">
            <div className="tw-flex-grow-[3] tw-border-2 tw-border-red-600 tw-border-solid">
                {children}
            </div>
            <div className="sm:tw-flex-grow-0 md:tw-flex-grow tw-border-2 tw-border-green-600 tw-border-solid">
                <RootAside />
            </div>
        </div>
        </body>
        </html>
    );
}
