// components/Breadcrumb.js
"use client";

import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type TBreadCrumbProps = {
    homeElement?: ReactNode;
    containerClasses?: string;
    listClasses?: string;
    activeClasses?: string;
    capitalizeLinks?: boolean;
};

const SVG_SEPARATOR = (
    <svg className="w-3 h-3 text-outline mx-1 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
    </svg>
);


const HOME_ICON = (
    <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
    </svg>
);

const Breadcrumb = ({
    homeElement,
    containerClasses,
    listClasses,
    activeClasses,
    capitalizeLinks,
}: TBreadCrumbProps) => {
    const paths = usePathname();
    const pathNames = paths.split('/').filter((path) => path);

    return (
        <nav className={`flex mb-4 ${containerClasses}`} aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                    <Link href="/" className="inline-flex items-center text-sm font-medium text-outline hover:text-primary-container">
                        {HOME_ICON}
                        {homeElement ? homeElement : 'Home'}
                    </Link>
                </li>
                {pathNames.length > 0 && SVG_SEPARATOR}
                {pathNames.map((link, index) => {
                    let href = `/${pathNames.slice(0, index + 1).join('/')}`;
                    let itemClasses = paths === href ? `${listClasses} ${activeClasses}` : listClasses;
                    let itemLink = capitalizeLinks
                        ? link.charAt(0).toUpperCase() + link.slice(1)
                        : link;
                    return (
                        <React.Fragment key={index}>
                            <li className={`inline-flex items-center ${paths === href ? '' : 'ms-1 text-sm font-medium text-outline hover:text-primary-container md:ms-2'}`}>
                                {paths !== href ? (
                                    <Link href={href} className={itemClasses}>{itemLink}</Link>
                                ) : (
                                    <div className="inline-flex items-center">
                                        <span className='text-sm font-medium text-outline'>{itemLink}</span>
                                    </div>
                                )}
                            </li>
                            {paths !== href && pathNames.length !== index + 1 && SVG_SEPARATOR}
                        </React.Fragment>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
