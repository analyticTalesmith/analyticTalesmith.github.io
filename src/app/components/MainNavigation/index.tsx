"use client";

import ContentWrapper from "@/app/components/ContentWrapper";
import Image from "next/image";
import Logo from "@/app/graphics/main-logo-black-transparent.svg";
import Link from "next/link";
import Icon_Menu from "@/app/components/Icons/Icon_Menu";
import Icon_X from "@/app/components/Icons/Icon_X";
import React, { useState } from "react";

type NavBarProps = {
    toggle: boolean,
}

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
                    <Image
                        alt="Logo"
                        height={68}
                        width={220}
                        src={Logo}
                        className="ml-0 max-md:mx-auto" />
                </Link>
                <ul className="hidden md:flex gap-x-6 ml-12 my-auto">
                    {links.map(({ route, text}) => (
                        <li
                            key={route}
                            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-600 hover:scale-105 hover:text-primary duration-200 link-underline"
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
                    <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-primary to-secondary text-black md:hidden">
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