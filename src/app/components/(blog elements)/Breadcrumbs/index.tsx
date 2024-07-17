'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface CrumbProps {
    text: string,
    href: string,
    last?: boolean,
    root?: boolean
}

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

const CUSTOM_NAMES: Record<string, string> = {
    'blog': 'Blog'
};
function Crumb({ text, href, last = false, root = false }: CrumbProps) {
    var crumbContent = () => {
        if (last) {
            return <span className='text-sm font-medium text-outline'>{text}</span>
        } else if (root) {
            return (<Link href={href} className='inline-flex items-center text-sm font-medium text-outline hover:text-primary-container hover:underline'>
                {HOME_ICON}{text}
            </Link>);
        } else {
            return (<Link href={href} className='inline-flex items-center text-sm font-medium text-outline hover:text-primary-container hover:underline'>
                {text}
            </Link>)
        }
    };

    return (
        <li className="inline-flex items-center">{crumbContent()}</li>
    );
}

interface GraphQLResponse<T> {
    data: T;
}

interface PostTitleContent {
    title: string;
}

interface PostResponse {
    post: PostTitleContent;
}

const fetchBlogPostTitle = async (slug: string) => {
    const query = ` {
                        post(id: "${slug}", idType:SLUG){
                          title
                    }}`

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(query)}`,
        { next: { revalidate: 60 } }
    );

    const postJson: GraphQLResponse<PostResponse> = await response.json();
    const post = postJson.data?.post;

    if (post && post.title) { return post.title }
    else { return null; }
};

function Breadcrumbs() {
    const pathname = usePathname();
    const [breadcrumbs, setBreadcrumbs] = useState<CrumbProps[]>([{ href: "/", text: "Home" }]);

    useEffect(() => {
        const generateBreadcrumbs = async () => {
            const asPathWithoutQuery = pathname.split("?")[0];
            const asPathNestedRoutes = asPathWithoutQuery.split("/").filter(v => v.length > 0);

            const crumblist = await Promise.all(asPathNestedRoutes.map(async (subpath, idx) => {
                const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
                var text = CUSTOM_NAMES[subpath] || subpath;

                // Fetch blog post title if it's the last crumb and it's a blog post
                if (idx === asPathNestedRoutes.length - 1 && asPathNestedRoutes[0] === 'blog') {
                    const fetchedTitle = await fetchBlogPostTitle(subpath);
                    if (fetchedTitle) text = fetchedTitle;
                }

                return { href, text };
            }));

            setBreadcrumbs([{ href: "/", text: "Home" }, ...crumblist]);
        };

        generateBreadcrumbs();
    }, [pathname]);

    return (
        <nav className='flex mb-4' aria-label='Breadcrumb'>
            <ol className="inline-flex items-center space-x-1 md:space-x-3 rtl:space-x-reverse">
                {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={idx}>
                        <Crumb {...crumb} key={idx} last={idx === breadcrumbs.length - 1} root={idx === 0} />
                        {idx < breadcrumbs.length - 1 && SVG_SEPARATOR}
                </React.Fragment>
            ))}
            </ol>
        </nav>
    );
}

export default Breadcrumbs;