'use client';
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
//import FlexColumn from "@/app/components/FlexColumn";
import Logo from "@/app/components/Logo";


const production: Options = {
    createElement,
    Fragment,
    // @ts-expect-error: the react types are missing.
    jsx: prod.jsx,
    // @ts-expect-error: the react types are missing.
    jsxs: prod.jsxs,
    components: {
        h2: ({ children }: React.PropsWithChildren<{}>) => {
            return <h1 className="text-on-primary text-xl font-bold">{children}</h1>;
        },
        p: ({ children }: React.PropsWithChildren<{}>) => {
            return <div>< Logo /><br /><p className="text-error">{children}</p></div>
        }
    }
};

const text = `<h2>Hello, world!</h2>
<p>Welcome to my page 👀</p>`;


export function useProcessor(text: string) {
            const [Content, setContent] = useState<ReactElement>();

useEffect(() => {
    unified()
        .use(rehypeParse, { fragment: true })
        .use(rehypeReact, production)
        .process(text)
        .then((file) => {
            setContent(file.result);
        });
}, [text]);

return Content;
}

export default function App() {
    return useProcessor(text);
}