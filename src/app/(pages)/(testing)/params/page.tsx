'use client'

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';


function PageQuery() {
    const searchParams = useSearchParams()

    return <input placeholder="Search..." />
}

export default function SearchBar() {
    <Suspense>
        < PageQuery />
    </Suspense>

    // URL -> `/dashboard?search=my-project`
    // `search` -> 'my-project'
}