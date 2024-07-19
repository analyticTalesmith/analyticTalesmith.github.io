'use client'

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';


function PageQuery() {
    const searchParams = useSearchParams()

    return (<input placeholder="Search..." />)
}

export default function SearchBar() {
    const searchParams = useSearchParams();

    <Suspense>
        < PageQuery />
    </Suspense>
    return (<div>Page: {searchParams.get('page')}</div>)

    // URL -> `/dashboard?search=my-project`
    // `search` -> 'my-project'
}