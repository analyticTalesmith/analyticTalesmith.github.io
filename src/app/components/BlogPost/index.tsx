"use client";

import React, {
    createElement,
    ReactElement,
    Fragment,
    useState,
    useEffect
} from "react";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeReact, { Options } from "rehype-react";
import * as prod from 'react/jsx-runtime';
import Logo from "@/app/components/Logo";


const production: Options = {
    createElement,
    Fragment,
    // @ts-expect-error: the react types are missing.
    jsx: prod.jsx,
    // @ts-expect-error: the react types are missing.
    jsxs: prod.jsxs,
    components: {
        //h2: ({ children }: React.PropsWithChildren<{}>) => {
        //    return <h1 className="text-on-primary text-xl font-bold">{children}</h1>;
        //},
        //p: ({ children }: React.PropsWithChildren<{}>) => {
        //    return <div>< Logo /><br /><p className="text-error">{children}</p></div>

        h1: ({ children }: React.PropsWithChildren<{}>) => {
            return <h1>{children}</h1>;
        },
        h2: ({ children }: React.PropsWithChildren<{}>) => {
            return <h2>{children}</h2>;
        },
        h3: ({ children }: React.PropsWithChildren<{}>) => {
            return <h3>{children}</h3>;
        },
        h4: ({ children }: React.PropsWithChildren<{}>) => {
            return <h4>{children}</h4>;
        },
        h5: ({ children }: React.PropsWithChildren<{}>) => {
            return <h5>{children}</h5>;
        },
        h6: ({ children }: React.PropsWithChildren<{}>) => {
            return <h6>{children}</h6>;
        },

        p: ({ children }: React.PropsWithChildren<{}>) => {
            return <p className ="mb-4">{children}</p>;
        },

        ul: ({ children }: React.PropsWithChildren<{}>) => {
            return <ul role="list">{children}</ul>;
        },
        ol: ({ children }: React.PropsWithChildren<{}>) => {
            return <ul>{children}</ul>;
        },
        li: ({ children }: React.PropsWithChildren<{}>) => {
            return <li>{children}</li>;
        },

        
        blockquote: ({ children }: React.PropsWithChildren<{}>) => {
            return <blockquote>{children}</blockquote>;
        }

        
    }
};

const BlogPost = ({ htmlContent }: { htmlContent: string }) => {
    const [content, setContent] = useState<ReactElement>();

    useEffect(() => {
        if (htmlContent) {
            unified()
                .use(rehypeParse, { fragment: true })
                .use(rehypeReact, production)
                .process(htmlContent)
                .then((file) => {
                    setContent(file.result);
                })
                .catch((error) => {
                    console.error('Error processing HTML:', error);
                });
        }
    }, [htmlContent]);

    return <div>{content}</div>;
};

export default BlogPost;