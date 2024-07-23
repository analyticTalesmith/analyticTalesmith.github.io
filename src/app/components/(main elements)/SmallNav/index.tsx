"use client";

import ContentWrapper from "@/app/components/(main elements)/ContentWrapper";
import Logo from "@/app/components/Logo";
import Link from "next/link";
import NavHamburgerMenu from "@/app/components/(buttons)/NavHamburgerToggle";
import Icon_Menu from "@/app/components/Icons/Icon_Menu";
import Icon_X from "@/app/components/Icons/Icon_X";
import React, { useState, useEffect } from "react";


interface linkData {
    route: string,
    text: string
}

function TestNav({ links }: { links: linkData[]}) {
    const [nav, setNav] = useState(false);

    useEffect(() => {
        if (nav) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [nav]);

    const toggleNav = () => {
        setNav(!nav);
    };

    return (
        <div>
            <button className={`float-left p-4 z-50 relative group md:hidden`}
                    onClick={toggleNav}>
                    <div className={`relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all ${nav ? 'bg-tertiary-container' : 'bg-primary-container'} border border-black duration-200 ring-surface-container-highest drop-shadow-harsh `}>
                        <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                            <div className={`bg-on-primary-container h-[2px] w-7 rounded transform transition-all duration-300 origin-left ${nav? 'translate-x-10': ''}`}></div>
                            <div className={`bg-on-primary-container h-[2px] w-7 rounded transform transition-all duration-300 ${nav? 'translate-x-10': ''} delay-75`}></div>
                            <div className={`bg-on-primary-container h-[2px] w-7 rounded transform transition-all duration-300 origin-left ${nav ? 'translate-x-10' : ''} delay-150`}></div>

                        <div className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10  ${nav ? 'w-12 translate-x-0 ' : 'w-0'} flex`}>
                            <div className={`absolute bg-on-tertiary-container h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 ${nav ? 'rotate-45' : ''}`}></div>
                            <div className={`absolute bg-on-tertiary-container h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 ${nav ? '-rotate-45' : ''}`}></div>
                             </div>

                        </div>
                    </div>
                </button>


            {nav && (

                <ul className="fixed inset-0 z-40 font-spaceGrotesk flex flex-col justify-center items-center bg-gradient-to-b from-primary-container to-tertiary-container md:hidden">
                    <div className="bg-gradient-to-b from-on-tertiary-container to-on-primary-container bg-clip-text text-transparent">
                        {links.map(({ route, text }) => (
                            <li
                                key={route}
                                className="px-4 cursor-pointer capitalize py-6 text-4xl"
                            >
                                <Link onClick={() => setNav(!nav)} href={route}>
                                    {text}
                                </Link>
                            </li>
                        ))}
                    </div>
                </ul>
            )}
        </div>
    );

}

export default TestNav