// @/app/components/(blog elements)/SearchParam/index.tsx

'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';

function PageQuery() {
    return (<div></div>);
}

function Page({ setPage, setCategory }: { setPage: Function, setCategory: Function }) {
    const searchParams = useSearchParams();

    useEffect(() => {
        const pageSearch = searchParams.get('page');
        const pageParam = pageSearch ? parseInt(pageSearch) : 1;

        const categoryParam = searchParams.get('category') || '';

        setPage(pageParam);
        setCategory(categoryParam);
    }, [searchParams, setPage, setCategory]);

    return null;
}

export default function SearchParam({ setPage, setCategory }: { setPage: Function, setCategory: Function }) {
    return (
        <Suspense fallback={<PageQuery />}>
            <Page setPage={setPage} setCategory={setCategory} />
        </Suspense>
    );
}
