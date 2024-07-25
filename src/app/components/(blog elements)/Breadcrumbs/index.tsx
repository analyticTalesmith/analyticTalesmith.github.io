// components/Breadcrumb.js
"use client";

import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import InlineRow from '@/app/components/(containers)/InlineRow';

type TBreadCrumbProps = {
    homeElement?: ReactNode;
    containerClasses?: string;
    listClasses?: string;
    activeClasses?: string;
    capitalizeLinks?: boolean;
};

interface CrumbProps {
    text: string,
    href: string,
    last?: boolean,
    root?: boolean,
    className?: string
}


const SVG_SEPARATOR = (
    <svg className="align-middle inline w-3 h-3 text-outline mx-1 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
    </svg>
);


const HOME_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="group-hover:text-primary-container max-md:hidden align-middle w-0 md:w-3 h-3 text-outline mx-1"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z" /></svg>
);


const CUSTOM_NAMES: Record<string, string> = {
    'blog': 'Blog',
    'blogHybrid': 'Blog'
};

function Crumb({ text, href, last = false, root = false, className = '' }: CrumbProps) {
    const linkClassAdd = 'hover:text-primary-container group-hover:underline group-hover:text-primary-container'

    const crumbContent = () => {
        if (last) {
            return <span>{text}</span>
        } else if (root) {
            return (
                <span className="inline-flex items-center group">
                    <Link href={href} className={`${linkClassAdd}`}>
                        {HOME_ICON}
                    </Link>
                    <Link href={href} className={`${linkClassAdd}`}>
                        {text}
                    </Link>
                </span>
            );
        } else {
            return (
                <Link href={href} className={`${linkClassAdd}`}>
                    {text}
                </Link>
            );
        }
    };

    return (
        <li className="inline-flex items-center my-auto align-middle text-sm font-medium text-outline min-w-3/12">{crumbContent()}</li>
    );
}

const Breadcrumb = ({ activeTitle }: { activeTitle?: string } ) => {
    const pathname = usePathname();
    const asPathWithoutQuery = pathname.split("?")[0];
    const asPathNestedRoutes = asPathWithoutQuery.split("/").filter(v => v.length > 0);

    const crumblist = asPathNestedRoutes.map((subpath, idx) => {
        const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
        let text = CUSTOM_NAMES[subpath] || subpath;

        if (idx === asPathNestedRoutes.length -1 && activeTitle) {
            text = activeTitle
        }
        
        return { href, text };
    });

    const breadcrumbs = [{ href: "/", text: "Home" }, ...crumblist];


    return (
        <InlineRow aria-label="Navigation Breadcrumbs" className="gap-0 ">
            <ol className="contents inline-flex items-center">
                {breadcrumbs.map((crumb, idx) => (
                    <div key={idx} className="space-x-1 md:space-x-3 min-h-3 mr-1 md:mr-3 my-auto ">
                        <Crumb {...crumb} className="flex-1" last={idx === breadcrumbs.length - 1} root={idx === 0} />
                        {idx < breadcrumbs.length - 1 && SVG_SEPARATOR}
                    </div>
                ))}
            </ol>
        </InlineRow>
    );
};

export default Breadcrumb;
