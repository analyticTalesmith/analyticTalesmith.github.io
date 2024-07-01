"use client";

import ContentWrapper from "@/app/components/ContentWrapper";
import Logo from "@/app/components/Logo";
import Link from "next/link";
import Icon_Menu from "@/app/components/Icons/Icon_Menu";
import Icon_X from "@/app/components/Icons/Icon_X";
import React, { useState } from "react";



const NavBar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            route: "/blog",
            text: "Blog",

        }, {
            route: "/portfolio",
            text: "Portfolio",

        }, {
            route: "/about",
            text: "About",

        },
    ];

    return (
        <div className="flex w-full h-20 py-16 items-center top-0 px-4 ">
            <ContentWrapper>
                <Link href="/ " className="ml-0 max-md:mx-auto" >
                    <Logo className="fill-on-background dark:fill-on-background-d hover:fill-primary dark:hover:fill-primary-d duration-200" />
                </Link>
                <ul className="hidden md:flex gap-x-6 ml-12 my-auto">
                    {links.map(({ route, text}) => (
                        <li
                            key={route}
                            className="font-spaceGrotesk nav-links px-4 cursor-pointer capitalize font-medium text-on-background dark:text-on-background-d hover:text-primary dark:hover:text-primary-d hover:scale-105 duration-200 hover:underline"
                        >
                            <Link href={route}>{text}</Link>
                        </li>
                    ))}
                </ul>
                <div
                    onClick={() => setNav(!nav)}
                    className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
                >
                    {nav ? <Icon_X /> : <Icon_Menu />}
                </div>

                {nav && (
                    <ul className="font-spaceGrotesk flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-primary-d to-tertiary-d dark:from-primary dark:to-tertiary text-on-primary-d dark:text-on-primary md:hidden">
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
                    </ul>
                )}
                </ContentWrapper>
        </div>
    );
};

export default NavBar