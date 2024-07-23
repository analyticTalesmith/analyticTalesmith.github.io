// @/app/components/(blog elements)/SearchParam/index.tsx

'use client'

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';

function PageQuery() {
    return (<div>Page: Loading...<br />Category: Loading...</div>)
}

function Page({ setPage, setCategory }: { setPage: Function, setCategory: Function}) {
    const searchParams = useSearchParams();

    useEffect(() => {
        var pageParam = Number(searchParams.get('page'));
        if (!pageParam) {
            pageParam = 1;
        }
        const categoryParam = searchParams.get('category');

        if (pageParam) {
            setPage(pageParam);
        }

        if (categoryParam) {
            setCategory(categoryParam);
        }
    }, [searchParams, setPage, setCategory]);

    return (null);
}

export default function SearchParam({ setPage, setCategory }: { setPage: Function, setCategory: Function }) {
    return (
        <Suspense fallback={<PageQuery />}>
            <Page setPage={setPage} setCategory={setCategory} />
        </Suspense>
    );
}