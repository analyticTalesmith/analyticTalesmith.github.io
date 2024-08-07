"use client";

import ContentWrapper from "@/app/components/(main elements)/ContentWrapper";
import Logo from "@/app/components/Logo";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import SmallNavigation from "@/app/components/(main elements)/SmallNav";
import Image from 'next/image';
import { LogoFullColor } from '@/app/components/(SVGs)/Logo';

const NavBar = ({ showReadProgress = false }: { showReadProgress?: boolean }) => {
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

    //// Prevent body scroll when nav is open
    //useEffect(() => {
    //    if (nav) {
    //        document.body.style.overflow = "hidden";
    //    } else {
    //        document.body.style.overflow = "auto";
    //    }
    //}, [nav]);

    //<div className="flex w-full h-20 py-16 items-center top-0 ">
    //    <ContentWrapper>
    //        <SmallNavigation links={navLinks}></SmallNavigation>
    //        <Link href="/ " className="ml-0 max-md:mx-auto" >
    //            <Logo className="fill-on-background hover:fill-primary duration-200" />
    //        </Link>
    //        <ul className="hidden md:flex gap-x-6 my-auto ml-auto mr-12">
    //            {navLinks.map(({ route, text}) => (
    //                <li
    //                    key={route}
    //                    className="font-spaceGrotesk nav-links px-4 cursor-pointer capitalize font-medium text-on-background hover:text-primary-container hover:scale-105 duration-200 hover:underline"
    //                >
    //                    <Link href={route}>{text}</Link>
    //                </li>
    //            ))}
    //        </ul>
    //        </ContentWrapper>
    //</div>
    if (showReadProgress) {
        return (<div></div>);
    } else {
        return (
            <header>
                <nav className="z-[100] fixed top-0 left-0 w-full bg-surface-container-highest border-black border-b-2 py-2 sm:mb-4 md:mb-8 lg:mb-16">
                    <div className="items-center flex flex-col sm:flex-row justify-between space-x-8 mx-auto max-w-7xl px-4">
                        <Link href="/" className="ml-0 mr-full inline-flex my-auto">
                            <LogoFullColor className="mr-3 h-9" />
                            <span className="self-center text-on-surface-container text-xl font-semibold whitespace-nowrap font-spaceGrotesk">Analytic Talesmith</span>
                        </Link>
                        <div className="flex flex-wrap items-center mr-0 ml-auto lg:order-2">
                            <SmallNavigation links={navLinks}></SmallNavigation>
                        </div>
                        <div className="hidden justify-between items-center w-full  lg:flex lg:order-1" id="mobile-menu">
                            <ul className="flex flex-col mt-4 font-medium mr-0 ml-auto lg:flex-row lg:space-x-8 lg:mt-0">
                                {navLinks.map(({ route, text }) => (
                                    <li
                                        key={route}
                                        className="font-spaceGrotesk capitalize block py-2 pr-4 pl-3 text-on-surface-container rounded lg:bg-transparent lg:p-0 hover:text-primary-container duration-200 hover:underline"
                                    >
                                        <Link href={route}>{text}</Link>
                                    </li>
                                ))}
                                {/*<li>*/}
                                {/*    <a href="#" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</a>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Company</a>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Features</a>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>*/}
                                {/*</li>*/}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>);
    }
}

export default NavBar