'use client';

import {MoonIcon, SunIcon} from '@heroicons/react/24/outline';
import React from "react";

let defaultDark = document.querySelector('html')?.classList.contains('tw-dark');

export default function Header() {
    const [isDark, setDark] = React.useState(defaultDark);   

    function toggleTheme() {
        document.querySelector('html')?.classList.toggle('tw-dark');
        setDark(!isDark);
    }

    function ThemeIcon() {
        if(isDark) {
            return <SunIcon className="tw-h-full tw-cursor-pointer tw-text-zinc-200" title="Toggle theme"
                            onClick={toggleTheme}/>
        } else {
            return <MoonIcon className="tw-h-full tw-cursor-pointer tw-text-zinc-800" title="Toggle theme"
                             onClick={toggleTheme}/>
        }
    } 
    
    return (<header
        className="tw-flex tw-justify-between tw-items-stretch tw-h-12 tw-p-1">
        <div className="tw-flex tw-justify-center tw-items-center tw-p-1 tw-text-zinc-800 dark:tw-text-zinc-200">Aditya Prasoon</div>
        <div className="tw-flex tw-justify-center tw-items-center tw-p-1">
            <ThemeIcon/>
        </div>
    </header>);
}