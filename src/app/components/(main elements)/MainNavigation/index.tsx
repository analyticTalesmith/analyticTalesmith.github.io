"use client";

import ContentWrapper from "@/app/components/(main elements)/ContentWrapper";
import Logo from "@/app/components/Logo";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import SmallNavigation from "@/app/components/(main elements)/SmallNav";

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const navLinks = [
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
                <SmallNavigation links={navLinks}></SmallNavigation>
                <Link href="/ " className="ml-0 max-md:mx-auto" >
                    <Logo className="fill-on-background hover:fill-primary duration-200" />
                </Link>
                <ul className="hidden md:flex gap-x-6 ml-12 my-auto">
                    {navLinks.map(({ route, text}) => (
                        <li
                            key={route}
                            className="font-spaceGrotesk nav-links px-4 cursor-pointer capitalize font-medium text-on-background hover:text-primary-container hover:scale-105 duration-200 hover:underline"
                        >
                            <Link href={route}>{text}</Link>
                        </li>
                    ))}
                </ul>
                </ContentWrapper>
        </div>
    );
};

export default NavBar