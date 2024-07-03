"use client";

import ContentWrapper from "@/app/components/ContentWrapper";
import Logo from "@/app/components/Logo";
import Link from "next/link";
import Icon_Menu from "@/app/components/Icons/Icon_Menu";
import Icon_X from "@/app/components/Icons/Icon_X";
import React, { useState, useEffect } from "react";
import ThemeToggle from "@/app/components/ThemeToggle";



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

    // Prevent body scroll when nav is open
    useEffect(() => {
        if (nav) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [nav]);

    return (
        <div className="flex w-full h-20 py-16 items-center top-0 px-4 ">
            <ContentWrapper>
                <Link href="/ " className="ml-0 max-md:mx-auto" >
                    <Logo className="fill-on-background hover:fill-primary duration-200" />
                </Link>
                <ul className="hidden md:flex gap-x-6 ml-12 my-auto">
                    {links.map(({ route, text}) => (
                        <li
                            key={route}
                            className="font-spaceGrotesk nav-links px-4 cursor-pointer capitalize font-medium text-on-background hover:text-primary-container hover:scale-105 duration-200 hover:underline"
                        >
                            <Link href={route}>{text}</Link>
                        </li>
                    ))}
                </ul>
                <div
                    onClick={() => setNav(!nav)}
                    className="cursor-pointer pr-4 z-20 /*text-gray-500*/ md:hidden"
                >
                    {nav ? <Icon_X /> : <Icon_Menu />}
                </div>

                {nav && (

                    <ul className="fixed inset-0 z-10 font-spaceGrotesk flex flex-col justify-center items-center /*absolute top-0 left-0 w-full h-screen*/ bg-gradient-to-b from-primary-container to-tertiary-container md:hidden">
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
                </ContentWrapper>
        </div>
    );
};

export default NavBar